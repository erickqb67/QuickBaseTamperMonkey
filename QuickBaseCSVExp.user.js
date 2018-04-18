// ==UserScript==
// @name         Quick Base CSV Export
// @namespace    LogicalPositionQuickBase
// @version      0.1
// @description  Exports Quick Base reports to CSV
// @author       Justin Torrence
// @match        ://*.quickbase.com/*
// @grant        none
// ==/UserScript==

const originalFunction = vpInitTable;

function wrapperInitFunction(){
    var value = originalFunction.apply(null, arguments);

    gVPviews.forEach(e=> e.qbCanExp = true);

    return value;
}

vpInitTable = wrapperInitFunction;
