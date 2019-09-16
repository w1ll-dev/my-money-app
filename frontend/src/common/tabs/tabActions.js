export const selectedTab = (tabId) => {
    return ({
        type: 'SELECTED_TAB',
        payload: tabId
    })
}

export const showTabs = (...tabIds) => {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'SHOWED_TAB',
        payload: tabsToShow
    }
}