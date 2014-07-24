/*
 * Calculator
 *
 */
/////////////////////////// LIBRARIES /////////////////////////////
/*
 * Calculator
 * Courtesy: Thibaut Courouble 
 */ 
function s(v) { document.getElementById('res').value = v }
function a(v) { document.getElementById('res').value += v }
function e() { try { s(eval(document.getElementById('res').value)) } catch(e) { s('Error') } }
/*
 * FrameWarp
 */
$(function(){
	// If no url property is passed, the
	// href attribute will be used
	$('#close-app').frameWarp();
});
/////////////////////////// ON DOCUMENT READY /////////////////////////////
$(document).ready(function() {
	console.log('CORE: Calculator document ready');
});