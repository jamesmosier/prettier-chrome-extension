chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: 'Format JS',
    contexts: ['editable'],
    id: 'context_for_page',
    onclick: (info, tab) => {
      chrome.tabs.sendMessage(tab.id, 'firedFromBg');
    },
  });
});
