// Web storage: Introduced in HTML5

// Local storage
// Session storage
// prior to this: cookies was mostly used

// Data is always stored in the form of string
localStorage.setItem("data", 4)
localStorage.setItem("data1", "4")

localStorage.getItem("data") // '4'
localStorage.getItem("data1") // '4'
 // Same goes for session storage


// Local storage vs session storage
// Both belongs to particular domain only 
// Session storage belong to particular session (current tab only) while Local storage can be shared among the tabs.
// Session storage is delted immediately the tab is closed, while storage is preserved even after closure of tabs

// old data storage ways : cookies
// Limit of 4KB
// cookies are sticky
// Many more confguration options are possible, e.g. setting expiry etc..