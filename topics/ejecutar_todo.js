var paths= ['asserts', 'operators', 'equality', 'truthyness', 'assignment', 'control_structures', 'strings', 'numbers', 'objects', 'arrays', 'reflection', 'prototype_chain', 'prototypal_inheritance', 'functions_and_closure', 'this', 'scope', 'regular_expressions'];

var funcion;

paths.forEach((nombre) => {
    funcion= require('./about_'+nombre+'.js');
    funcion();
});
