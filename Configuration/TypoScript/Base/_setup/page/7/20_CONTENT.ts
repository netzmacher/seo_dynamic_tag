page {
		// empty statement for proper comments only
	7 {
	}
		// 20
	7 = COA
	7 {
			// Sets the registers: seodynamictagAuthor, seodynamictagCrdate, seodynamictagDescription, seodynamictagKeywords, seodynamictagKeywordsCover, seodynamictagTitle, seodynamictagTitleAppend, seodynamictagTstamp
		20 = CONTENT
		20 {
			if.isTrue.data = register:seodynamictagPid
			table.data	= register:seodynamictagTable
			select {
				pidInList.data	= register:seodynamictagPid
				where {
					data        = register:seodynamictagUid
					noTrimWrap  = |uid = ||
				}
			}
				// field = {$plugin.tx_seodynamictag.database.field.description.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.description.appendix}
			renderObj = LOAD_REGISTER
			renderObj {
				seodynamictagAuthor =
				seodynamictagAuthor {
					cObject = TEXT
					cObject {
						field							= {$plugin.tx_seodynamictag.database.field.author}
						crop							= {$plugin.tx_seodynamictag.crop.author}
						stripHtml         = 1
						htmlSpecialChars  = 1
						ifEmpty						= {$plugin.tx_seodynamictag.default.author}
					}
				}
				seodynamictagCrdate =
				seodynamictagCrdate {
					cObject = TEXT
					cObject {
						field		= crdate
					}
				}
				seodynamictagDescription =
				seodynamictagDescription {
					cObject = USER
					cObject {
						userFunc = Netzmacher\SeoDynamicTag\Userfunc\RenderUserfunc->HandleTimestamp
						cObject = TEXT
						cObject {
							field							= {$plugin.tx_seodynamictag.database.field.description}
							crop							= {$plugin.tx_seodynamictag.crop.description}
							stripHtml         = 1
							htmlSpecialChars  = 1
							ifEmpty						= {$plugin.tx_seodynamictag.default.description}
						}
						strftime = {$plugin.tx_seodynamictag.date.strftime}
					}
				}
				seodynamictagKeywords =
				seodynamictagKeywords {
					cObject = USER
					cObject {
						userFunc = Netzmacher\SeoDynamicTag\Userfunc\RenderUserfunc->HandleTimestamp
						cObject = TEXT
						cObject {
							field							= {$plugin.tx_seodynamictag.database.field.keywords}
							crop							= {$plugin.tx_seodynamictag.crop.keywords}
							stripHtml         = 1
							htmlSpecialChars  = 1
							//ifEmpty = {$plugin.tx_seodynamictag.default.keywords}
							stdWrap =
							stdWrap {
									// field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
								ifEmpty = TEXT
								ifEmpty {
									field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
	//						crop		= {$plugin.tx_seodynamictag.crop.keywords}
									stdWrap {
										replacement {
												// bracket ( > null
											10 =
											10 {
												search  = (
												replace =
											}
												// bracket ) > null
											20 =
											20 {
												search  = )
												replace =
											}
												// dot > null
											30 =
											30 {
												search  = .
												replace =
											}
												// ", " > ","
											31 =
											31 {
												search {
													stdWrap {
														cObject = TEXT
														cObject {
															value = ,
															noTrimWrap = || |
														}
													}
												}
												replace = ,
											}
												// semicolon > comma
											32 =
											32 {
												search  = ;
												replace = ,
											}
												// pipe > null
											40 =
											40 {
												search = |
												replace =
											}
												// line feed > null
											50 =
											50 {
												search {
													char = 10
												}
												replace =
											}
												// space > comma
											70 =
											70 {
												search {
													char = 32
												}
												replace = ,
											}
												// - > comma
											80 =
											80 {
												search = -
												replace = ,
											}
												// : > comma
											90 =
											90 {
												search = -
												replace = ,
											}
												// ! > comma
											100 =
											100 {
												search = -
												replace = ,
											}
												// underscore > space
											110 =
											110 {
												search = _
												replace {
													char = 32
												}
											}
										}
									}
								}
								ifEmpty = {$plugin.tx_seodynamictag.default.keywords}
							}
						}
						strftime = {$plugin.tx_seodynamictag.date.strftime}
					}
				}
					// Must be above of seodynamictagTitle
				seodynamictagTitleAppend =
				seodynamictagTitleAppend {
					cObject = USER
					cObject {
						userFunc = Netzmacher\SeoDynamicTag\Userfunc\RenderUserfunc->HandleTimestamp
						cObject = TEXT
						cObject {
							field							= {$plugin.tx_seodynamictag.database.field.title.appendix}
							stripHtml         = 1
							htmlSpecialChars  = 1
						}
						strftime = {$plugin.tx_seodynamictag.date.strftime}
					}
				}
					// Must be below of seodynamictagTitleAppend
				seodynamictagTitle =
				seodynamictagTitle {
					cObject = USER
					cObject {
						userFunc = Netzmacher\SeoDynamicTag\Userfunc\RenderUserfunc->HandleTimestamp
						cObject = COA
						cObject {
							10 = TEXT
							10 {
								field							= {$plugin.tx_seodynamictag.database.field.title}
								stripHtml         = 1
								htmlSpecialChars  = 1
							}
							20 = COA
							20 {
								if.isTrue.data = register:seodynamictagTitleAppend
								10 = TEXT
								10 {
									value				= {$plugin.tx_seodynamictag.title.devider.value}
									noTrimWrap	= {$plugin.tx_seodynamictag.title.devider.noTrimWrap}
								}
								20 = TEXT
								20 {
									data = register:seodynamictagTitleAppend
								}
								stdWrap {
									crop = {$plugin.tx_seodynamictag.crop.title}
								}
							}
						}
						strftime = {$plugin.tx_seodynamictag.date.strftime}
					}
				}
				seodynamictagTstamp =
				seodynamictagTstamp {
					cObject = TEXT
					cObject {
						field		= tstamp
					}
				}
			}
		}
	}
}