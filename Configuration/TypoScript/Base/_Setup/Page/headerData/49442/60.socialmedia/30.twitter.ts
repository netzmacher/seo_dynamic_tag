plugin.tx_seodynamictag_pi1 {
  page {
    headerData {
      49442 {
        60 {
					30 {
					}
						// twitter: comment, twitter:card, twitter:site, twitter:title, twitter:description, twitter:image:src
					30 = COA
					30 {
							// isFalse = $plugin.tx_seodynamictag.socialmedia.twitter.disabled (here: {$plugin.tx_seodynamictag.socialmedia.twitter.disabled})
						if =
						if.isFalse = {$plugin.tx_seodynamictag.socialmedia.twitter.disabled}
							// 10: line feed. 20: comment
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
								noTrimWrap = |  <!-- | -->|
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
									// value = summary_large_image, if.isTrue.data = register:seodyntag_imagePublicUrl 
								10 = TEXT
								10 {
										// isTrue.data = register:seodyntag_imagePublicUrl
									if =
									if.isTrue.data = register:seodyntag_imagePublicUrl
									value = summary_large_image
								}
									// value = summary, if.negate.isTrue.data = register:seodyntag_imagePublicUrl 
								20 = TEXT
								20 {
										// isTrue.data = register:seodyntag_imagePublicUrl
									if =
									if.isTrue.data = register:seodyntag_imagePublicUrl
									if.negate = 1
									value = summary
								}
								stdWrap {
									noTrimWrap = |  <meta name="twitter:card" content="|" />|
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
								noTrimWrap = |  <meta name="twitter:site" content="|" />|
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
								// twitter:title data = register:seodyntag_title
							20 = TEXT
							20 {
								data = register:seodyntag_title
								noTrimWrap = |  <meta name="twitter:title" content="|" />|
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
								data = register:seodyntag_description
								noTrimWrap = |  <meta name="twitter:description" content="|" />|
							}
						}
							// 10: line feed. 20: twitter:image:src
						60 = COA
						60 {
								// isTrue.data = register:seodyntag_imagePublicUrl
							if =
							if.isTrue.data = register:seodyntag_imagePublicUrl
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// twitter:image:src: data = register:seodyntag_imagePublicUrl
							20 = TEXT
							20 {
								data = register:seodyntag_imagePublicUrl
								noTrimWrap = |  <meta name="twitter:image:src" content="|" />|
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
#								noTrimWrap = |  <meta name="twitter:creator" content="|" />|
#							}
#						}
					}
        }
      }
    }
  }
}