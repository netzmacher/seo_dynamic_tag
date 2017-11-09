[globalVar = GP:tx_typo3forum_pi1|forum > 0] && [globalVar = TSFE:id = 1120]
	plugin.tx_seodynamictag {
		canonical.single.additionalParams = &tx_typo3forum_pi1[forum]={GP:tx_typo3forum_pi1|forum}
		condition.single.begin = globalVar = GP:tx_typo3forum_pi1|forum > 0] && [globalVar = TSFE:id = 1120
		database.field.description = title
		database.field.description.appendix = description
		database.field.keywords.cover = title
		database.field.title = title
		database.field.title.appendix = description
		database.pidInList = 1151
		database.table = tx_typo3forum_domain_model_forum_forum
		database.gp = tx_typo3forum_pi1|forum
		default.author = Netzmacher-Forum Responsive TYPO3
		description.prefix = Responsive Forum |
		keywords.appendix = TYPO3,responsive
		title.prefix = Responsive Forum |
	}
[globalVar = GP:tx_typo3forum_pi1|topic > 0] && [globalVar = TSFE:id = 1120]
	plugin.tx_seodynamictag {
		canonical.single.additionalParams = &tx_typo3forum_pi1[topic]={GP:tx_typo3forum_pi1|topic}
		condition.single.begin = globalVar = GP:tx_typo3forum_pi1|topic > 0] && [globalVar = TSFE:id = 1120
		database.field.description = subject
		//database.field.description.appendix = description
		database.field.keywords.cover = subject
		database.field.title = subject
		//database.field.title.appendix = description
		database.pidInList = 1151
		database.table = tx_typo3forum_domain_model_forum_topic
		database.gp = tx_typo3forum_pi1|topic
		default.author = Netzmacher-Forum Responsive TYPO3
		description.prefix = Netzmacher-Forum Responsive TYPO3 |
		keywords.appendix = TYPO3,responsive
		title.prefix = Netzmacher-Forum Responsive TYPO3 |
	}
[END]