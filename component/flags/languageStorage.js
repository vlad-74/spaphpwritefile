// БЛОК АВТОМАТИЧЕСКОГО АПРЕДЕЛЕНИЯ ЯЗЫКА
  var ACTIVE_PAGE = 'home';
  var nowEntry = new Date();
  var DEFAULT_LANGUAGE = 'ru';
  var CURRENT_LANGUAGE = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || DEFAULT_LANGUAGE;

// localStorage.removeItem("Ключ")=======localStorage.clear()=======escapeHtml_decode (menuHeader)

  currBrowser = getBrowser(); //браузер клиента

  var supportsLocalStorage = supports_localStorage();
  // alert(supportsLocalStorage);

  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  if(isIE == true){ supportsLocalStorage = false }

  if(supportsLocalStorage === true){
    try {
      var firstEntry = localStorage.getItem('firstEntry'); 
    }catch(e){
      // languageStorage='ru'; alert(supportsLocalStorage !== null);
    } finally {
      if(firstEntry==null){
        localStorage.setItem('firstEntry', 'true');

        if(CURRENT_LANGUAGE.indexOf("-") > 1){
          CURRENT_LANGUAGE = CURRENT_LANGUAGE.substring(0,CURRENT_LANGUAGE.indexOf("-"));
        }
        localStorage.setItem('languageStorage',CURRENT_LANGUAGE);
      };
      localStorage.setItem('lastLoginTimeStorage',nowEntry);
    }  
  }