[globalVar = GP:tx_typo3forum_pi1|forum > 0] && [globalVar = TSFE:id = 1120]
	plugin.tx_seodynamictag {
		canonical.single.additionalParams = &tx_typo3forum_pi1[forum]={GP:tx_typo3forum_pi1|forum}
	  condition.single.begin = globalVar = GP:tx_typo3forum_pi1|forum > 0] && [globalVar = TSFE:id = 1120
		database.field.description = title
		database.field.title.description = description
		database.field.keywords = title
		database.field.title = title
		database.field.title.appendix = description
	  database.pidInList = 1151
	  database.table = tx_typo3forum_domain_model_forum_forum
	  database.gp = tx_typo3forum_pi1|forum
		default.author = Netzmacher-Forum Responsive TYPO3
	  description.prefix = Forum
		keywords.appendix = TYPO3,responsive
		title.prefix = Responsive Forum
		title.prefix = Responsive Forum
	}
[END]