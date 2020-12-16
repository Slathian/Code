#include <iostream>
#include <assert.h>

// The maximum length of each line
const int BUFF_SIZE = 80;
const char DELIMITER = ',';

// TODO: Define a student grade struct.
// This can use bit flags OR keep the course names.
// You may assume students do not take more than 5 courses
typedef struct
{ 
    int studentID;
    int studnetClassArray;
}

// Prototypes: Question 1
unsigned int getNumFields(char* a_textLine);
// GIVEN
unsigned int getFieldAt(char* a_outBuff, size_t outSize, char* a_textLine, unsigned int idx);

// BONUS QUESTION:
// Recall that a course flag "char" is not really a char but a byte of data
// This converts a string to the corresponding byte with the 1 bit turned on.
char getCourseFlag(char* a_textField);

// GIVEN
// Function purely for testing.  It simply traverses the fields and prints them
// out.  You could use this code to help you write other functions
void testPrintFields(char* a_textLine);

// TODO
// Helper function to extract  studentGrad information
// from EACH line of the text file.  a_textLine is a complete line
// of text from the file and the function returns a studentGrad struct
// with all the information related to that text line.
studentGrad extractSGradInfo(char* a_textLine);

// TODO:
// Suggestion: use fgets to get the entire line at a time
// readStudentRegFile opens the file a_filePathName and reads each
// line one by one.  Each line of text will be parse (using functions 
// like strlen strstr and strchr.
int readStudentRegFile(const char* a_filePathName,
    studentGrad* a_students, int maxNumStudents);

// Extra Practice (not graded)
// Now that the file has been read in, indicate which students can graduate.
// Look at the big flags lecture for an example
// Assume a student must pass BIT1400 BIT2400 and ITEC2100
void printGradPossibility(studentGrad* a_students, int numStudents);

// Extra Practice (not graded) 2: File Output
// Output the students that passed/completed BIT 1400.   You can use bit flags (the bonus question)
// or strstr (string-string or finding a string in a string) or strcmp (string compare)
// See the strings and file I/O lectures.
// const char* a_newFilePathName is the name of the file being output (like "MyFileOut.txt")
// studentGrad* a_students: an array of studentGrad structures
// int numStudents" The size of a_students or at least how many students are stored in the array.
// Return the number of students that completed BIT 1400.
int output1400Grads(const char* a_newFilePathName, studentGrad* a_students, int numStudents);

// hasPassed1400 takes a studentGrad struct and determines if that student
// has passed BIT 1400.  Returns 1 if true and 0 if false.
int hasPassed1400(studentGrad stu);




int main()
{
    // GIVEN: Testing the provided code.
    char* a_myTest1 = (char*)"123456, BIT1400, BIT2400, ITEC2100";
    char* a_myTest2 = (char*)"654321, BIT1400, ITEC2100, BIT1001";
    char* a_myTest3 = (char*)"333333";

    printf("-----Test 1--------\n");
    testPrintFields(a_myTest1);
    printf("-----Test 2--------\n");
    testPrintFields(a_myTest2);
    printf("-----Test 3--------\n");
    testPrintFields(a_myTest3);
    printf("-----Test 4--------\n");
    testPrintFields(NULL);

    const char* a_filePathName = "MyFileTest.txt";
    const char* a_newFilePathName = "BIT1400Graduates.txt";
    const int MAX_NUM_STUDENTS = 20;
    studentGrad a_students[MAX_NUM_STUDENTS];

    int numStudents = readStudentRegFile(a_filePathName, a_students, MAX_NUM_STUDENTS);
    
    // Examine which students passed BIT 1400
    for (int i = 0; i < numStudents; i++)
    {
        if (hasPassed1400(a_students[i]) == 1)
        {
            //printf("Student %i has passed BIT 1400.\n", a_students[i].id);
        }
    }
    // BONUS:
    // Now that the file has been read in, indicate which students can graduate.
    // Look at the big flags lecture for an example
    

    return 0;
}

// Function purely for testing.  It simply traverses the fields and prints them
// out. You could use this code to help you write other functions
void testPrintFields(char* a_textLine)
{
    char a_buff[BUFF_SIZE];
    int numFields1 = getNumFields(a_textLine);
    printf("-- Printing out the fields of %s --\n", a_textLine);
    for (int i = 0; i < numFields1; i++)
    {
        int numCharsField = getFieldAt(a_buff, BUFF_SIZE, a_textLine, i);
        if (numCharsField > 0)
        {
            printf("--%s++ ", a_buff);
        }
        else
        {
            printf("PROBLEM ");
        }
    }
    printf("\n");

}

// TODO
// Return the number of fields (separated by the DELIMITER)
// on each line of text (a_textLine)
// Ex: getNumFields("hi,how, are, you") == 4
unsigned int getNumFields(char* a_textLine)
{
    int totalFields = 0;
    //...........DEFINE THE FUNCTION.......
    return totalFields;
}

// Save the field from a_textLine at index idx into a character array a_outBuff
// Return the number of characters in that field.  Thus if getFieldAt returns 0
// a_textLine or a_outBuff is NULL, idx is not a valid index, or the field is empty
// Ex: getFieldAt(a_outBuff, "hi,how, are, you", 1) == 3 and a_outBuff now
// stores the string "how"
// getFieldAt(a_outBuff, "hi,how, are, you", 4) == 0 and a_outBuff is unchanged.
unsigned int getFieldAt(char* a_outBuff, size_t outSize, char* a_textLine, unsigned int idx)
{
    int totalFields = 0;
    if (a_textLine == NULL || a_outBuff == NULL || strlen(a_textLine) == 0)
    {
        return 0;
    }
    // Reset the comma pos
    char* p_delimPos = a_textLine;
    for (int i = 0; i < idx; i++)
    {
        p_delimPos = strchr(p_delimPos, DELIMITER);

        // If the index is not valid (not enough delimiters)
        if (p_delimPos == NULL)
        {
            return 0;
        }
        else
        {
            p_delimPos += 1;
        }
    }
    // check if there is a comma after the field
    char* p_nextDelim = strchr(p_delimPos + 1, DELIMITER);

    // Calculate how many characters to copy over
    size_t numChars = 0;
    if (p_nextDelim)
    {
        numChars = p_nextDelim - p_delimPos;
    }
    else
    {
        numChars = strlen(p_delimPos);
        assert(numChars > 0);
        // fgets also returns the new line character.  Need to remove this.
        if (p_delimPos[numChars - 1] == '\n')
        {
            numChars--;
        }
    }

    // Copy over the characters to the output buffer
    assert(outSize > numChars);

    // strncpy is like strcpy but it copies n characters over
    // not the entire string
    strncpy_s(a_outBuff, outSize, p_delimPos, numChars);
    return numChars;
}

// BONUS TODO
// getCourseFlag returns a char representing the bit flag
// used to represent the course name stored in string a_textField.
// For example a_textField("BIT1400") == CFLAG_BIT1400
char getCourseFlag(char* a_textField)
{
    //........ DEFINE THE FUNCTION.....
    return 0;
}

// TODO
// Helper function to extract  studentGrad information
// from EACH line of the text file.  a_textLine is a complete line
// of text from the file and the function returns a studentGrad struct
// with all the information related to that text line.
studentGrad extractSGradInfo(char* a_textLine)
{
    studentGrad sg;
    //...........DEFINE THE FUNCTION.......
    return sg;
}

// TODO:
// Suggestion: use fgets to get the entire line at a time
// readStudentRegFile opens the file a_filePathName and reads each
// line one by one.  Each line of text will be parse (using functions 
// like strlen strstr and strchr.
int readStudentRegFile(const char* a_filePathName,
    studentGrad* a_students, int maxNumStudents)
{
    int numStudents = 0;
    //...........DEFINE THE FUNCTION.......
    return numStudents;
}

// NO POINTS Practice Code:
// Now that the file has been read in, indicate which students can graduate.
// Look at the big flags lecture for an example
void printGradPossibility(studentGrad* a_students, int numStudents)
{
    //...........DEFINE THE FUNCTION.......
}

// NO POINTS Practice Code
// Output the students that passed/completed BIT 1400.   You can use bit flags (the bonus question)
// or strstr (string-string or finding a string in a string) or strcmp (string compare)
// See the strings and file I/O lectures.
// const char* a_newFilePathName is the name of the file being output (like "MyFileOut.txt")
// studentGrad* a_students: an array of studentGrad structures
// int numStudents" The size of a_students or at least how many students are stored in the array.
// Return the number of students that completed BIT 1400.
int output1400Grads(const char* a_newFilePathName, studentGrad* a_students, int numStudents)
{
    //...........DEFINE THE FUNCTION.......
    return 0;
}