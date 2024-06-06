page {
	headerData {
			// empty statement for proper comments only
		49442 {
		}
			// 20: title
		49442 = COA
		49442 {
			20 {
			}
				// <title>|</title>
			20 = COA
			20 {
					// char = 10
				10 = TEXT
				10 {
					char = 10
				}
					// comment
				20 = COA
				20 {
					10 = TEXT
					10 {
						value = Tags added by EXT:seo_dynamic_tag
						noTrimWrap = |<!-- | -->|
					}
					20 = TEXT
					20 {
						char = 10
					}
				}
					// data = page: title
				30 = COA
				30 {
					if.isFalse.data = register:seodynamictagTitle
						// 10: Home, if ... 20: data = page: title, if ...
					10 = COA
					10 {
							// if page is the root page: Home
						10 = TEXT
						10 {
							if =
							if {
								value {
										// rootpage uid
									data = leveluid:0
								}
								equals {
										// current page uid
									data = page:uid
								}
							}
							value = {$plugin.tx_seodynamictag.title.rootpage.en}
							lang {
								de = {$plugin.tx_seodynamictag.title.rootpage.de}
								en = {$plugin.tx_seodynamictag.title.rootpage.en}
							}
              required = true
  						noTrimWrap = || – |
 						}
							// if page is not the root page: data = page: title
						20 = TEXT
						20 {
							if =
							if {
								value {
										// rootpage uid
									data = leveluid:0
								}
								equals {
										// current page uid
									data = page:uid
								}
								negate = 1
							}
							data = page: title
              required = true
  						noTrimWrap = || – |
						}
					}
						// data = leveltitle: 0
					20 = TEXT
					20 {
						data = leveltitle: 0
					}
					wrap = <title>|</title>
				}
					// <title>{register:seodynamictagTitle}</title>
				40 = TEXT
				40 {
					if.isTrue.data = register:seodynamictagTitle
					data				= register:seodynamictagTitle
					wrap				= <title>|</title>
					required		= 1
				}
			}
		}
	}
}
