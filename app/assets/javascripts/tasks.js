// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready", ready);

function ready() {
	$('new_task').on('ajax:success', newTask);

	function newTask() {
		console.log(arguments);
		window.location.reload();
	}
}
