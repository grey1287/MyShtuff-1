document.addEventListener('DOMContentLoaded', function() {
    console.log(M)
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, 'left');
});
