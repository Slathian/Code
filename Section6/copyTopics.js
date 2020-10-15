const allTopics = document.querySelectorAll('.topics')

allTopics

copy(allTopics)

const arrtopicssample = Array.prototype.slice.call(allTopics);

arrtopicssample

arrtopicssample[0]

arrtopicssample[0].textContent

const sampleTopicList = arrtopicssample.map(e => e.textContent)

copy(sampleTopicList)


// [
//     "POSTGRESRUBY ON RAILS",
//     "POSTGRES APP",
//     "REACT HOOKSFRONT END DEVELOPMENTREACT JSREACT",
//     "RAILS MIGRATIONSDATABASESRUBY ON RAILS",
//     "DEEP LEARNINGARTIFICIAL INTELLIGENCEMACHINE LEARNING",
//     "GROUND SCHOOLFLIGHT SCHOOLPRIVATE PILOT",
//     "DRAG AND DROPREACT JSREACT",
//     "CSS",
//     "MOBILE DEVELOPMENTFONTSREACT NATIVE",
//     "DEVELOPMENTMACHINE LEARNINGPROGRAMMING"
// ]