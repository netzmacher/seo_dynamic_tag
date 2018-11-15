plugin.tx_seodynamictag_pi1 {
  page {
    headerData {
				// Empty statement for proper comments only
      49441 {
			}
        // 10: seodyntag_title. renderObj below: seodyntag_crdate, seodyntag_keywords, seodyntag_imagePublicUrl, seodyntag_tstamp. renderObj below: seodyntag_imageHeight, seodyntag_imageWidth. field = {$plugin.tx_seodynamictag.database.field.title.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.title.appendix}
      49441 = COA
      49441 {
					// 20: LOAD_REGISTER seodyntag_title and others. XXX30: for development only
				10 = COA
				10 {
						// seodyntag_title
					20 = LOAD_REGISTER
					20 {
						seodyntag_title {
								// title: prefix, title, appendix
							cObject = COA
							cObject {
									// prefix: {$plugin.tx_seodynamictag.title.prefix}
								10 = TEXT
								10 {
									value       = {$plugin.tx_seodynamictag.title.prefix}
									noTrimWrap  = || |
									required    = 1
									stdWrap {
										stripHtml         = 1
										htmlSpecialChars  = 1
									}
								}
								19 = TEXT
								19 {
										// #i0029, 180212, dwildt, 1+
									if.isFalse.data = GP:{$plugin.tx_seodynamictag.database.gp}
									value = SEO Dynamic Tag: GP:{$plugin.tx_seodynamictag.database.gp} is null!
									lang {
										de = SEO Dynamic Tag: GP:{$plugin.tx_seodynamictag.database.gp} ist null!
										en = SEO Dynamic Tag: GP:{$plugin.tx_seodynamictag.database.gp} is null!
									}
								}
									// seodyntag_crdate, seodyntag_keywords, seodyntag_imagePublicUrl, seodyntag_tstamp. renderObj below: seodyntag_imageHeight, seodyntag_imageWidth. field = {$plugin.tx_seodynamictag.database.field.title.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.title.appendix}
								20 = COA
								20 {
										// #i0029, 180212, dwildt, 1+
									if.isTrue.data = GP:{$plugin.tx_seodynamictag.database.gp}
										// {$plugin.tx_seodynamictag.database.table}: field = {$plugin.tx_seodynamictag.database.field.title.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.title.appendix}
									20 = COA
									20 {
											// if.isTrue = {$plugin.tx_seodynamictag.database.field.title.prefix}{$plugin.tx_seodynamictag.database.field.title.appendix}
										if =
										if {
											isTrue = {$plugin.tx_seodynamictag.database.field.title.prefix}{$plugin.tx_seodynamictag.database.field.title.appendix}
										}
											// {$plugin.tx_seodynamictag.database.table}: field = {$plugin.tx_seodynamictag.database.field.title.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.title.appendix}
										10 = CONTENT
										10 {
											table = {$plugin.tx_seodynamictag.database.table}
											select {
												pidInList = {$plugin.tx_seodynamictag.database.pidInList}
												recursive = {$plugin.tx_seodynamictag.database.recursive}
												where {
													data        = GP:{$plugin.tx_seodynamictag.database.gp}
													noTrimWrap  = |uid = ||
												}
											}
												// seodyntag_crdate, seodyntag_keywords, seodyntag_imagePublicUrl, seodyntag_tstamp. renderObj below: seodyntag_imageHeight, seodyntag_imageWidth. field = {$plugin.tx_seodynamictag.database.field.title.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.title.appendix}
											renderObj = COA
											renderObj {
													// seodyntag_crdate, seodyntag_keywords, seodyntag_imagePublicUrl, seodyntag_tstamp. renderObj below: seodyntag_imageHeight, seodyntag_imageWidth
												10 = LOAD_REGISTER
												10 {
													seodyntag_crdate {
															// field = crdate
														cObject = TEXT
														cObject {
															field = crdate
														}
													}
													seodyntag_keywords {
															// value = {$plugin.tx_seodynamictag.database.field.keywords}
														cObject = TEXT
														cObject {
															value = {$plugin.tx_seodynamictag.database.field.keywords}
															stdWrap {
																stripHtml         = 1
																htmlSpecialChars  = 1
															}
														}
													}
													seodyntag_imagePublicUrl {
															// data = file:current:publicUrl WITH ABSOLUTE URL!
														cObject = FILES
														cObject {
															references {
																table = {$plugin.tx_seodynamictag.database.table}
																uid.field = uid
																fieldName = {$plugin.tx_seodynamictag.database.field.image}
															}
																// begin: 1 in case of excludeFirstImage. Case from field: "{$plugin.tx_seodynamictag.database.field.excludeFirstImage}". Interal: #i0031
															begin =
															begin {
																stdWrap {
																		// 10: excludeFirstImage = FALSE, 20: excludeFirstImage = TRUE. Here from field "{$plugin.tx_seodynamictag.database.field.excludeFirstImage}"
																	cObject = COA
																	cObject {
																			// excludeFirstImage = FALSE. Here from field "{$plugin.tx_seodynamictag.database.field.excludeFirstImage}"
																		10 = TEXT
																		10 {
																				// excludeFirstImage = FALSE. Here from field "{$plugin.tx_seodynamictag.database.field.excludeFirstImage}"
																			if =
																			if {
																				isFalse {
																					field = {$plugin.tx_seodynamictag.database.field.excludeFirstImage}
																				}
																			}
																			value = 0
																		}
																			// excludeFirstImage = TRUE. Here from field "{$plugin.tx_seodynamictag.database.field.excludeFirstImage}"
																		20 = TEXT
																		20 {
																				// excludeFirstImage = TRUE. Here from field "{$plugin.tx_seodynamictag.database.field.excludeFirstImage}"
																			if =
																			if {
																				isFalse {
																					field = {$plugin.tx_seodynamictag.database.field.excludeFirstImage}
																				}
																				negate = 1
																			}
																			value = 1
																		}
																	}
																}
															}
															maxItems = 1
															renderObj = COA
															renderObj {
																	// seodyntag_imageHeight, seodyntag_imageWidth
																10 = LOAD_REGISTER
																10 {
																	seodyntag_alt {
																			// data = file:current:height
																		cObject = TEXT
																		cObject {
																			data = file:current:alternative
	 																		ifBlank {
																				cObject = TEXT
																				cObject {
																					data = file:current:description
																					ifBlank {
																						cObject = TEXT
																						cObject {
																							data = file:current:title
																						}
																					}
																				}
																			}
																			stdWrap {
																				stripHtml         = 1
																				htmlSpecialChars  = 1
																			}
																		}
																	}
																	seodyntag_imageHeight {
																			// data = file:current:height
																		cObject = TEXT
																		cObject {
																			data = file:current:height
																		}
																	}
																		// data = file:current:width
																	seodyntag_imageWidth {
																		cObject = TEXT
																		cObject {
																			data = file:current:width
																		}
																	}
																}
																	// Thanks to Kevin Ditscheid: https://stackoverflow.com/questions/39489881/absolute-path-with-img-resource#39490745
																20 = TEXT
																20 {
																	typolink{
																		parameter.stdWrap{
																			cObject = IMG_RESOURCE
																			cObject{
																				file.import.data = file:current:uid
																				file.treatIdAsReference = 1
																			}
																		}
																		returnLast = url
																		forceAbsoluteUrl = 1
																	}
																}
															}
														}
													}
													seodyntag_tstamp {
															// field = tstamp
														cObject = TEXT
														cObject {
															field = tstamp
														}
													}
												}
													// field = {$plugin.tx_seodynamictag.database.field.title.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.title.appendix}
												20 = COA
												20 {
														// field = {$plugin.tx_seodynamictag.database.field.title.prefix}
													10 = TEXT
													10 {
														field = {$plugin.tx_seodynamictag.database.field.title.prefix}
														stdWrap {
															stripHtml         = 1
															htmlSpecialChars  = 1
														}
													}
														// devider
													20 = TEXT
													20 {
														if {
															value = 11
															equals {
																stdWrap {
																	cObject = COA
																	cObject {
																		10 = TEXT
																		10 {
																			if {
																				isTrue {
																					field = {$plugin.tx_seodynamictag.database.field.title.prefix}
																				}
																			}
																			value = 1
																		}
																		20 = TEXT
																		20 {
																			if {
																				isTrue {
																					field = {$plugin.tx_seodynamictag.database.field.title.appendix}
																				}
																			}
																			value = 1
																		}
																	}
																}
															}
														}
														value       = {$plugin.tx_seodynamictag.title.devider.value}
														noTrimWrap  = {$plugin.tx_seodynamictag.title.devider.noTrimWrap}
													}
														// field = {$plugin.tx_seodynamictag.database.field.title}
													30 = TEXT
													30 {
														field       = {$plugin.tx_seodynamictag.database.field.title}
														required    = 1
														stdWrap {
															stripHtml         = 1
															htmlSpecialChars  = 1
														}
													}
														// key = {$plugin.tx_seodynamictag.database.case.title.appendix}. field = {$plugin.tx_seodynamictag.database.field.title.appendix}
													40 = CASE
													40 {
														key = {$plugin.tx_seodynamictag.database.case.title.appendix}
															// field = {$plugin.tx_seodynamictag.database.field.title.appendix}
														default = TEXT
														default {
															field       = {$plugin.tx_seodynamictag.database.field.title.appendix}
															required    = 1
															stdWrap {
																stripHtml         = 1
																htmlSpecialChars  = 1
															}
															noTrimWrap = |: ||
														}
															// field = {$plugin.tx_seodynamictag.database.field.title.appendix}, strftime = %x
														strftime = TEXT
														strftime {
															field       = {$plugin.tx_seodynamictag.database.field.title.appendix}
															required    = 1
															stdWrap {
																stripHtml         = 1
																htmlSpecialChars  = 1
																strftime = {$plugin.tx_seodynamictag.database.strftime.title.appendix}
															}
															noTrimWrap = |: ||
														}
													}
												}
											}
										}
									}
								}
									// appendix: {$plugin.tx_seodynamictag.title.appendix}
								30 = TEXT
								30 {
									value				= {$plugin.tx_seodynamictag.title.appendix}
									required    = 1
									stdWrap {
										stripHtml         = 1
										htmlSpecialChars  = 1
									}
									noTrimWrap = |: ||
								}
								stdWrap {
									crop  = {$plugin.tx_seodynamictag.crop.title} | ... | 1
								}
							}
						}
					}
						// for development only
					XXX30 = TEXT
					XXX30 {
						data = register:seodyntag_title
						noTrimWrap = | <h1>|</h1>| 
					}
				}
			}
		}
	}
}