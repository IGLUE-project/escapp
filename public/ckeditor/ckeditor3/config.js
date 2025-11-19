CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.uiColor = '#AADC6E';
	if((SceneMaker)&&(SceneMaker.I18n)&&(typeof SceneMaker.I18n.getLanguage == "function")){
		config.language = SceneMaker.I18n.getLanguage();
	}
};