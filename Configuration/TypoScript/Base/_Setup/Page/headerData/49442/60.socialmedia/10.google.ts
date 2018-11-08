plugin.tx_seodynamictag_pi1 {
  page {
    headerData {
      49442 {
        60 {
					10 {
					}
						// google: comment, name, description, image
					10 = COA
					10 {
							// isFalse = $plugin.tx_seodynamictag.socialmedia.google.disabled (here: {$plugin.tx_seodynamictag.socialmedia.google.disabled})
						if =
						if.isFalse = {$plugin.tx_seodynamictag.socialmedia.google.disabled}
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
								value = Schema.org markup for Google+ added by EXT:seo_dynamic_tag
								noTrimWrap = |  <!-- | -->|
							}
						}
							// 10: line feed. 20: name
						20 = COA
						20 {
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// name data = register:seodyntag_title
							20 = TEXT
							20 {
								data = register:seodyntag_title
								noTrimWrap = |  <meta itemprop="name" content="|">|
							}
						}
							// 10: line feed. 20: description
						30 = COA
						30 {
								// isTrue.data = register:seodyntag_description
							if =
							if.isTrue.data = register:seodyntag_description
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// description: data = register:seodyntag_description
							20 = TEXT
							20 {
								data = register:seodyntag_description
								noTrimWrap = |  <meta itemprop="description" content="|">|
							}
						}
							// 10: line feed. 20: image
						40 = COA
						40 {
								// isTrue.data = register:seodyntag_imagePublicUrl
							if =
							if.isTrue.data = register:seodyntag_imagePublicUrl
								// line feed
							10 = TEXT
							10 {
								char = 10
							}
								// image: data = register:seodyntag_imagePublicUrl
							20 = TEXT
							20 {
								data = register:seodyntag_imagePublicUrl
								noTrimWrap = |  <meta itemprop="image" content="|">|
							}
						}
					}
        }
      }
    }
  }
}