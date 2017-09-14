$(document).ready(function(){
  var firstLoad = false;
  
  if (firstLoad == false){
    firstLoad == true;

    var menuButtons = getResultFromJson('../../data/menuButtons.json');
    var pageContent = getResultFromJson('../../data/pageContent.json');
    var tickerContent = getResultFromJson('../../data/tickerContent.json');

  };
  // var buttonsMenunar = R.find(R.propEq('id', 'ar'))(menuButtons);//поиск по id = ar
  var notIn = R.reject(R.propEq('id', 'ar'))(menuButtons);//аналог = NOT IN соответствует id != ar
  phpWriteFile('menuButtons.json', JSON.stringify(notIn));//записываем в файл

  var bool_ticke = 0;
  if(supportsLocalStorage) {
    var languageStorage = null; //присваение значения в languageStorage.js

    languageStorage = localStorage.getItem('languageStorage'); 
    // console.log(languageStorage);
  }else{languageStorage='ru'}

  сhangeFlag('lang-'+ languageStorage)//+присвоить элементу язык
  $("ul.lang-list li").removeClass("selected");
  $('.lang-'+ languageStorage).addClass("selected");

  function currentContent(home,porfolio,about,content){
    $(".home").html(home);
    $(".portfolio").html(porfolio);
    $(".about").html(about);
    $("#pageContent").html(content);
  };

  function сhangeFlag(selectFlag) {
    var index;
    for (index = 0; index < flags.length; ++index) {
      $(".language-dropdown").find(".lang-flag").removeClass(flags[index])
    };
    $(".language-dropdown").find(".lang-flag").addClass(selectFlag);

    var findFlag = selectFlag.substring(selectFlag.indexOf("-") + 1);
    var buttonsMenu = R.find(R.propEq('id', findFlag))(menuButtons);
    var contentPage = R.find(R.propEq('id', findFlag))(pageContent);
    var contentTicker = R.find(R.propEq('id', findFlag))(tickerContent);  

    if(supportsLocalStorage){localStorage.setItem('languageStorage',findFlag)};
    currFlagForMenu = findFlag; //ДЛЯ МЕНЮ

    currentContent(
      buttonsMenu.home, 
      buttonsMenu.portfolio, 
      buttonsMenu.about, 
      contentPage[ACTIVE_PAGE]
    );

  function changeMarquee(){
    var myimages=new Array();
    myimages[0]='<marquee behavior="scroll" direction="left">'+ contentTicker.first +'</marquee>';
    myimages[1]='<marquee behavior="scroll" direction="left">'+ contentTicker.second +'</marquee>';

    $("#tick").html(myimages[bool_ticke]);
    if(bool_ticke == 0){
      bool_ticke = 1;
    }else{
      bool_ticke = 0;
    }
  }

    changeMarquee();
//alert(ACTIVE_PAGE);
  };

  $(".lang-flag").click(function(){
    $(".lang-list").fadeToggle();
  });

  $("ul.lang-list li").click(function(){
      $("ul.lang-list li").removeClass("selected");
      $(this).addClass("selected");

      if($(this).hasClass('lang-cs')){сhangeFlag("lang-cs");
      }else if($(this).hasClass('lang-en')){сhangeFlag('lang-en');
      }else if($(this).hasClass('lang-fi')){сhangeFlag('lang-fi');
      }else if($(this).hasClass('lang-fr')){сhangeFlag('lang-fr');
      }else if($(this).hasClass('lang-de')){сhangeFlag('lang-de');
      }else if($(this).hasClass('lang-el')){сhangeFlag('lang-el');
      }else if($(this).hasClass('lang-hi')){сhangeFlag('lang-hi');
      }else if($(this).hasClass('lang-id')){сhangeFlag('lang-id'); 
      }else if($(this).hasClass('lang-fa')){сhangeFlag('lang-fa');        
      }else if($(this).hasClass('lang-ji')){сhangeFlag('lang-ji');
      }else if($(this).hasClass('lang-it')){сhangeFlag('lang-it');                     
      }else if($(this).hasClass('lang-ja')){сhangeFlag('lang-ja');
      }else if($(this).hasClass('lang-ko')){сhangeFlag('lang-ko');
      }else if($(this).hasClass('lang-nl')){сhangeFlag('lang-nl');        
      }else if($(this).hasClass('lang-pr')){сhangeFlag('lang-pr');
      }else if($(this).hasClass('lang-pl')){сhangeFlag('lang-pl');
      }else if($(this).hasClass('lang-ru')){сhangeFlag('lang-ru');      
      }else if($(this).hasClass('lang-ar')){сhangeFlag('lang-ar');
      }else if($(this).hasClass('lang-sr')){сhangeFlag('lang-sr');
      }else if($(this).hasClass('lang-es')){сhangeFlag('lang-es'); 
      }else if($(this).hasClass('lang-te')){сhangeFlag('lang-te');           
      }else if($(this).hasClass('lang-tr')){сhangeFlag('lang-tr');
      }else if($(this).hasClass('lang-zh')){сhangeFlag('lang-zh');
      };
      $(".lang-list").fadeToggle(300);
  });
  $("#loader").fadeToggle();
  $("#statusline").fadeToggle();

  // НАЖАТИЕ КНОПОК
  $(".home").click(function(){

    сhangeFlag('lang-'+ currFlagForMenu);
    //alert('!home!'+ languageStorage);
  });

  $(".portfolio").click(function(){
    сhangeFlag('lang-'+ currFlagForMenu);
      //alert('!portfolio!'+ languageStorage);
  });

  $(".about").click(function(){
    сhangeFlag('lang-'+ currFlagForMenu);
    //alert('!about!'+ languageStorage);
  });

});