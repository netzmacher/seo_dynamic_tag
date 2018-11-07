plugin.tx_seodynamictag_pi1 {
  page {
      // seo_dynamic_tag: description
    meta =
    meta {
			description >
			description = {$plugin.tx_seodynamictag.default.description}
      description {
					// prefix, description, appendix
				cObject = COA
				cObject {
						// prefix: value = {$plugin.tx_seodynamictag.description.prefix}
					10 = TEXT
					10 {
						value       = {$plugin.tx_seodynamictag.description.prefix}
						noTrimWrap  = || |
						required    = 1
					}
						// {$plugin.tx_seodynamictag.database.table}: {$plugin.tx_seodynamictag.database.field.description}
					20 = COA
					20 {
						  // #i0029, 180212, dwildt, 1+
						if.isTrue.data = GP:{$plugin.tx_seodynamictag.database.gp}
							// {$plugin.tx_seodynamictag.database.table}: {$plugin.tx_seodynamictag.database.field.description}
						20 = CONTENT
						20 {
							table = {$plugin.tx_seodynamictag.database.table}
							select {
								pidInList = {$plugin.tx_seodynamictag.database.pidInList}
								recursive = {$plugin.tx_seodynamictag.database.recursive}
								where {
									data        = GP:{$plugin.tx_seodynamictag.database.gp}
									noTrimWrap  = |uid = ||
								}
							}
								// field = {$plugin.tx_seodynamictag.database.field.description.prefix}, devider, field = {$plugin.tx_seodynamictag.database.field.description.appendix}
							renderObj = COA
							renderObj {
									// field = {$plugin.tx_seodynamictag.database.field.description.prefix}
								10 = TEXT
								10 {
									field = {$plugin.tx_seodynamictag.database.field.description.prefix}
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
																field = {$plugin.tx_seodynamictag.database.field.description.prefix}
															}
														}
														value = 1
													}
													20 = TEXT
													20 {
														if {
															isTrue {
																field = {$plugin.tx_seodynamictag.database.field.description.appendix}
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
									// field = {$plugin.tx_seodynamictag.database.field.description}
								30 = TEXT
								30 {
									field       = {$plugin.tx_seodynamictag.database.field.description}
									required    = 1
									stdWrap {
										stripHtml         = 1
										htmlSpecialChars  = 1
									}
								}
									// field = {$plugin.tx_seodynamictag.database.field.description.appendix}
								40 = TEXT
								40 {
									field       = {$plugin.tx_seodynamictag.database.field.description.appendix}
									required    = 1
									stdWrap {
										stripHtml         = 1
										htmlSpecialChars  = 1
									}
									noTrimWrap = |: ||
								}
							}
						}
					}
						// appendix: value = {$plugin.tx_seodynamictag.description.appendix}
					30 = COA
					30 {
							// if.isTrue = {$plugin.tx_seodynamictag.description.appendix}
						if =
						if {
							isTrue = {$plugin.tx_seodynamictag.description.appendix}
						}
							// devider: value = {$plugin.tx_seodynamictag.description.devider.value}
						10 = TEXT
						10 {
							value       = {$plugin.tx_seodynamictag.description.devider.value}
							noTrimWrap  = {$plugin.tx_seodynamictag.description.devider.noTrimWrap}
							required    = 1
						}
							// appendix: value = {$plugin.tx_seodynamictag.description.appendix}
						20 = TEXT
						20 {
							value     = {$plugin.tx_seodynamictag.description.appendix}
							wrap      = |
							required  = 1
						}
					}
					stdWrap {
						crop  = {$plugin.tx_seodynamictag.crop.description} | ... | 1
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
			// seo_dynamic_tag: description
    meta =
    meta {
      description >
      // by seo_dynamic_tag
      description < plugin.tx_seodynamictag_pi1.page.meta.description
    }
  }
[{$plugin.tx_seodynamictag.condition.single.end}]
