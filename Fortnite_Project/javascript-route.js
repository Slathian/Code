allNames = (className) => {
    var names = [];
    var _try = ''
    var i = 0;
    while (i < 100) {
        _try = document.getElementsByClassName(className)[i].innerText
        names.push(_try)
        i++
    }
    return names; 
}

// allNames('trn-lb-entry__name') This pulls name

// allNames('trn-lb-entry__stat trn-text--right') This pulls ALL data that includes points --- Need to clean it so maybe make a new script for this


// document.getElementsByClassName('trn-table__row trn-table__row--clickable trn-lb-entry trn-lb-entry--top3 trn-table__row--active')[0].children[1].innerText;

// you can use that to get the top ranking of the guys in a live leader board, one that has the #1 #2 #3 placements, will need to use different code for the rest of the people on the leaderboard
