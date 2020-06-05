page {
	headerData {
		49442 {
				// empty statement for proper comments only
			60 {
			}
				// 20: opengraph
			60 = COA
			60 {
				20 {
				}
					// opengraph: comment, og:title, article (og:type, og:article), og:url, og:image, og:site_name, fb:admin
				20 = COA
				20 {
						// isFalse = $plugin.tx_seodynamictag.socialmedia.opengraph.disabled (here: {$plugin.tx_seodynamictag.socialmedia.opengraph.disabled})
					if =
					if.isFalse = {$plugin.tx_seodynamictag.socialmedia.opengraph.disabled}
						// comment, og:title, article (og:type, og:article), og:url, og:image, og:site_name, fb:admin
					10 = COA
					10 {
						if.isTrue.data = register:seodynamictagPid
							// 10: line feed. 20: comment
						10 = COA
						10 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// comment
							20 = TEXT
							20 {
								value = Open Graph data added by EXT:seo_dynamic_tag
								noTrimWrap = |<!-- | -->|
							}
						}
							// 10: line feed. 20: og:title
						20 = COA
						20 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// og:title: data = register:seodynamictagTitle
							20 = TEXT
							20 {
								data = register:seodynamictagTitle
								noTrimWrap = |<meta property="og:title" content="|" />|
							}
						}
							// article: 10: og:type. 20: article:published_time. 30: article:modified_time. 40: article:section. 50: article:tag
						30 = COA
						30 {
								// 10: line feed. 20: og:type: article
							10 = COA
							10 {
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// og:type: value = article
								20 = TEXT
								20 {
									value = article
									noTrimWrap = |<meta property="og:type" content="|" />|
								}
							}
								// 10: line feed. 20: article:published_time
							20 = COA
							20 {
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// article:published_time: data = register:seodynamictagCrdate, strftime = 2013-09-17T05:59:00
								20 = TEXT
								20 {
									//value = 2013-09-17T05:59:00+01:00
									data = register:seodynamictagCrdate
									//strftime = 2013-09-17T05:59:00
									strftime = %Y-%m-%dT%T
									noTrimWrap = |<meta property="article:published_time" content="|" />|
								}
							}
								// 10: line feed. 20: article:modified_time
							30 = COA
							30 {
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// article:published_time: data = register:seodynamictagTstamp, strftime = 2013-09-17T05:59:00
								20 = TEXT
								20 {
									//value = 2013-09-17T05:59:00+01:00
									data = register:seodynamictagTstamp
									//strftime = 2013-09-17T05:59:00
									strftime = %Y-%m-%dT%T
									noTrimWrap = |<meta property="article:modified_time" content="|" />|
								}
							}
								// 10: line feed. 20: article:section
							40 = COA
							40 {
									// isTrue.data = page:title
								if =
								if.isTrue.data = page:title
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// article:section: data = page:title
								20 = TEXT
								20 {
									data = page:title
									noTrimWrap = |<meta property="article:section" content="|" />|
								}
							}
								// 10: line feed. 20: article:tag
							50 = COA
							50 {
									// isTrue.data = register:seodynamictagKeywords
								if =
								if.isTrue.data = register:seodynamictagKeywords
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// article:tag: register:seodynamictagKeywords
								20 = TEXT
								20 {
									data = register:seodynamictagKeywords
									noTrimWrap = |<meta property="article:tag" content="|" />|
								}
							}
						}
							// 10: line feed. 20: og:url
						40 = COA
						40 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// og:url: data = page:uid, additionalParams = {$plugin.tx_seodynamictag.canonical.single.additionalParams}
							20 = TEXT
							20 {
								typolink {
									parameter.data				= page:uid
									additionalParams.data	= register:seodynamictagAdditionalParams
									forceAbsoluteUrl			= 1
									returnLast						= url
									useCacheHash					= {$plugin.tx_seodynamictag.canonical.useCashHash}
								}
								noTrimWrap = |<meta property="og:url" content="|" />|
							}
						}
							// 10: og:image. 20: og:image:width. 30: og:image:height. 40: og:image:alt. 
						50 = COA
						50 {
								// isTrue.data = register:seodynamictagImagePublicUrl
							if =
							if.isTrue.data = register:seodynamictagImagePublicUrl
								// og:image
							10 = COA
							10 {
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// og;image: data = register:seodynamictagImagePublicUrl
								20 = TEXT
								20 {
									data = register:seodynamictagImagePublicUrl
									noTrimWrap = |<meta property="og:image" content="|" />|
								}
							}
								// og:image:width
							20 = COA
							20 {
									// isTrue.data = register:seodynamictagImageWidth
								if =
								if.isTrue.data = register:seodynamictagImageWidth
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// og:image:width: data = register:seodynamictagImageWidth
								20 = TEXT
								20 {
									data = register:seodynamictagImageWidth
									noTrimWrap = |<meta property="og:image:width" content="|" />|
								}
							}
								// og:image:height: data = register:seodynamictagImageHeight
							30 = COA
							30 {
									// isTrue.data = register:seodynamictagImageHeight
								if =
								if.isTrue.data = register:seodynamictagImageHeight
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// og:image:height
								20 = TEXT
								20 {
									data = register:seodynamictagImageHeight
									noTrimWrap = |<meta property="og:image:height" content="|" />|
								}
							}
								// og:image:alt
							40 = COA
							40 {
									// isTrue.data = register:seodynamictagImageAlt
								if =
								if.isTrue.data = register:seodynamictagImageAlt
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// og:image:alt
								20 = TEXT
								20 {
									data = register:seodynamictagImageAlt
									noTrimWrap = |<meta property="og:image:alt" content="|" />|
								}
							}
						}
							// 10: line feed. 20: og:description
						60 = COA
						60 {
								// isTrue.data = register:seodynamictagDescription
							if =
							if.isTrue.data = register:seodynamictagDescription
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// og:description: data = register:seodynamictagDescription
							20 = TEXT
							20 {
								data = register:seodynamictagDescription
								noTrimWrap = |<meta property="og:description" content="|" />|
							}
						}
							// og:site_name: data = page:title
						70 = COA
						70 {
								// isTrue.data = page:title
							if =
							if.isTrue.data = page:title
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// og:site_name: data = page:title
							20 = TEXT
							20 {
								data = page:title
								noTrimWrap = |<meta property="og:site_name" content="|" />|
							}
						}
							// fb:admins
						80 = COA
						80 {
								// isFalse = $plugin.tx_seodynamictag.socialmedia.opengraph.facebookadminid (here: {$plugin.tx_seodynamictag.socialmedia.opengraph.facebookadminid})
							if =
							if.isTrue = {$plugin.tx_seodynamictag.socialmedia.opengraph.facebookadminid}
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// fb:admins: value = {$plugin.tx_seodynamictag.socialmedia.opengraph.facebookadminid}
							20 = TEXT
							20 {
								value = {$plugin.tx_seodynamictag.socialmedia.opengraph.facebookadminid}
								noTrimWrap = |<meta property="fb:admins" content="|" />|
							}
						}
					}
				}
			}
		}
	}
}