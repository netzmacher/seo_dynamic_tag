page {
	headerData {
		49442 {
				// empty statement for proper comments only
			60 {
			}
				// 30: twitter
			60 = COA
			60 {
				30 {
				}
					// twitter: comment, twitter:card, twitter:site, twitter:title, twitter:description, twitter:image:src
				30 = COA
				30 {
						// isFalse = $plugin.tx_seodynamictag.socialmedia.twitter.disabled (here: {$plugin.tx_seodynamictag.socialmedia.twitter.disabled})
					if =
					if.isFalse = {$plugin.tx_seodynamictag.socialmedia.twitter.disabled}
						// twitter: comment, twitter:card, twitter:site, twitter:title, twitter:description, twitter:image:src
					10 = COA
					10 {
						if.isTrue.data = register:seodynamictagPid
							// twitter: comment, twitter:card, twitter:site, twitter:title, twitter:description, twitter:image:src
						10 = COA
						10 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// comment: value = Twitter Card data
							20 = TEXT
							20 {
								value = Twitter Card data
								noTrimWrap = |<!-- | -->|
							}
						}
						// 10: line feed. 20: twitter:card
						20 = COA
						20 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
							20 = COA
							20 {
									// value = summary_large_image, if.isTrue.data = register:seodynamictagImagePublicUrl 
								10 = TEXT
								10 {
										// isTrue.data = register:seodynamictagImagePublicUrl
									if =
									if.isTrue.data = register:seodynamictagImagePublicUrl
									value = summary_large_image
								}
									// value = summary, if.negate.isTrue.data = register:seodynamictagImagePublicUrl 
								20 = TEXT
								20 {
										// isTrue.data = register:seodynamictagImagePublicUrl
									if =
									if.isTrue.data = register:seodynamictagImagePublicUrl
									if.negate = 1
									value = summary
								}
								stdWrap {
									noTrimWrap = |<meta name="twitter:card" content="|" />|
								}
							}
						}
							// 10: line feed. 20: twitter:site
						30 = COA
						30 {
								// isFalse = $plugin.tx_seodynamictag.socialmedia.twitter.site (here: {$plugin.tx_seodynamictag.socialmedia.twitter.site})
							if =
							if.isTrue = {$plugin.tx_seodynamictag.socialmedia.twitter.site}
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// twitter:site: value = {$plugin.tx_seodynamictag.socialmedia.twitter.site}
							20 = TEXT
							20 {
								value = {$plugin.tx_seodynamictag.socialmedia.twitter.site}
								noTrimWrap = |<meta name="twitter:site" content="|" />|
							}
						}
							// 10: line feed. 20: twitter:title
						40 = COA
						40 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// twitter:title data = register:seodynamictagTitle
							20 = TEXT
							20 {
								data = register:seodynamictagTitle
								noTrimWrap = |<meta name="twitter:title" content="|" />|
							}
						}
							// 10: line feed. 20: twitter:description
						50 = COA
						50 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// twitter:description: data = register:seodyntag_twitter:description
							20 = TEXT
							20 {
								data = register:seodynamictagDescription
								noTrimWrap = |<meta name="twitter:description" content="|" />|
							}
						}
							// 10: line feed. 20: twitter:image
						60 = COA
						60 {
								// isTrue.data = register:seodynamictagImagePublicUrl
							if =
							if.isTrue.data = register:seodynamictagImagePublicUrl
								// 10: line feed. 20: twitter:image
							10 = COA
							10 {
									// isTrue.data = register:seodynamictagImagePublicUrl
								if =
								if.isTrue.data = register:seodynamictagImagePublicUrl
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// twitter:image: data = register:seodynamictagImagePublicUrl
								20 = TEXT
								20 {
									data = register:seodynamictagImagePublicUrl
									noTrimWrap = |<meta name="twitter:image" content="|" />|
								}
							}
								// 10: line feed. 20: twitter:image:alt
							20 = COA
							20 {
									// isTrue.data = register:seodynamictagImageAlt
								if =
								if.isTrue.data = register:seodynamictagImageAlt
									// line feed
								10 = TEXT
								10 {
									char = 10
								}
									// twitter:image:alt: data = register:seodynamictagImageAlt
								20 = TEXT
								20 {
									data = register:seodynamictagImageAlt
									noTrimWrap = |<meta name="twitter:image:alt" content="|" />|
								}
							}
						}
	#							// 10: line feed. 20: twitter:creator
	#						70 = COA
	#						70 {
	#								// line feed
	#							10 = TEXT
	#							10 {
	#								char = 10
	#							}
	#								// twitter:creator: value = @author_handle
	#							20 = TEXT
	#							20 {
	#								value = @author_handle
	#								noTrimWrap = |<meta name="twitter:creator" content="|" />|
	#							}
	#						}
					}
				}
			}
		}
	}
}