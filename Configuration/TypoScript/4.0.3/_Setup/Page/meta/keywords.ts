plugin.tx_seodynamictag_pi1 {
  page {
      // seo_dynamic_tag: keywords
    meta =
    meta {
			keywords >
			keywords = {$plugin.tx_seodynamictag.default.keywords}
      keywords {
					// prefix, table = {$plugin.tx_seodynamictag.database.table}, appendix
				cObject = COA
				cObject {
						// prefix: {$plugin.tx_seodynamictag.keywords.prefix}
					10 = TEXT
					10 {
						value     = {$plugin.tx_seodynamictag.keywords.prefix}
						wrap      = |,
						required  = 1
					}
						// table = {$plugin.tx_seodynamictag.database.table}: {$plugin.tx_seodynamictag.database.field.keywords} and ifEmpty {$plugin.tx_seodynamictag.database.field.keywords.cover}
					20 = COA
					20 {
						  // #i0029, 180212, dwildt, 1+
						if.isTrue.data = GP:{$plugin.tx_seodynamictag.database.gp}
							// table = {$plugin.tx_seodynamictag.database.table}: {$plugin.tx_seodynamictag.database.field.keywords} and ifEmpty {$plugin.tx_seodynamictag.database.field.keywords.cover}
						20 = CONTENT
						20 {
							table = {$plugin.tx_seodynamictag.database.table}
								// pidInList = {$plugin.tx_seodynamictag.database.pidInList}, where.data = GP:{$plugin.tx_seodynamictag.database.gp}
							select =
							select {
								pidInList = {$plugin.tx_seodynamictag.database.pidInList}
								recursive = {$plugin.tx_seodynamictag.database.recursive}
								where {
									data        = GP:{$plugin.tx_seodynamictag.database.gp}
									noTrimWrap  = |uid = ||
								}
							}
								// cObject.field = {$plugin.tx_seodynamictag.database.field.keywords}, cObject.stdWrap.ifEmpty.field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
							renderObj = TEXT
							renderObj {
									// field = {$plugin.tx_seodynamictag.database.field.keywords}, stdWrap.ifEmpty.field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
								cObject = TEXT
								cObject {
									field = {$plugin.tx_seodynamictag.database.field.keywords}
										// ifEmpty.field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
									stdWrap =
									stdWrap {
											// field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
										ifEmpty = TEXT
										ifEmpty {
											field = {$plugin.tx_seodynamictag.database.field.keywords.cover}
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
									}
								}
								stdWrap {
									stripHtml         = 1
									htmlSpecialChars  = 1
								}
							}
						}
					}
						// appendix: {$plugin.tx_seodynamictag.keywords.appendix}
					30 = TEXT
					30 {
						value     = {$plugin.tx_seodynamictag.keywords.appendix}
						wrap      = ,|
						required  = 1
					}
					stdWrap {
						crop  = {$plugin.tx_seodynamictag.crop.keywords} | | 1
					}
				}
			}
    }
  }
}
  // plugin.tx_seodynamictag_pi1



  ////////////////////////////////////////////////
  //
  // Global condition for the single view

[{$plugin.tx_seodynamictag.condition.single.begin}]
  page {
    meta {			
		}
			// seo_dynamic_tag: keywords
    meta =
    meta {
      keywords    >
				// In case of {$plugin.tx_seodynamictag.condition.single.begin}
      keywords    < plugin.tx_seodynamictag_pi1.page.meta.keywords
    }
  }
[{$plugin.tx_seodynamictag.condition.single.end}]
