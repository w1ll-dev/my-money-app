const selectedTab = (tabId) => {
    return ({
        type: 'SELECTED_TAB',
        payload: tabId
    })
}

export default selectedTab