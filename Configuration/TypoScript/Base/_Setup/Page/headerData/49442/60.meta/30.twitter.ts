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
								// twitter:card: value = summary_large_image
							20 = TEXT
							20 {
								value = summary_large_image
								noTrimWrap = |  <!-- <meta name="twitter:card" content="|"> -->|
							}
						}
							// 10: line feed. 20: twitter:site
						30 = COA
						30 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// twitter:site: value = @publisher_handle
							20 = TEXT
							20 {
								value = @publisher_handle
								noTrimWrap = |  <!-- <meta name="twitter:site" content="|"> -->|
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
								noTrimWrap = |  <meta name="twitter:title" content="|">|
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
								noTrimWrap = |  <meta name="twitter:description" content="|">|
							}
						}
							// 10: line feed. 20: twitter:creator
						60 = COA
						60 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// twitter:creator: value = @author_handle
							20 = TEXT
							20 {
								value = @author_handle
								noTrimWrap = |  <meta name="twitter:creator" content="|">|
							}
						}
							// 10: line feed. 20: twitter:image:src
						70 = COA
						70 {
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
								noTrimWrap = |  <meta name="twitter:image:src" content="|">|
							}
						}
					}
        }
      }
    }
  }
}