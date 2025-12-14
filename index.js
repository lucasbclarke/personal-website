const links = document.getElementsByTagName("a");

for ( let i = 0; i < links.length; i++) {

  window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
      ( typeof window.performance != "undefined" && 
        window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      window.location.reload();
    }
  });


  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
    links[i].style.color = "#2d2df1";
  } else {
    console.info( "This page is not reloaded");
    links[i].style.color = "#2d2df1";
  }
  
}
