page {
		// empty statement for proper comments only
	7 {
	}
		// 30
	7 = COA
	7 {
			// Sets the registers: seodynamictagImageAlt, seodynamictagImageHeight, seodynamictagImageWidth, seodynamictagImagePublicUrl
		30 = FILES
		30 {
			if.isTrue.data = register:seodynamictagPid
			references {
				table.data	= register:seodynamictagTable
				uid.data		= register:seodynamictagUid
				fieldName		= {$plugin.tx_seodynamictag.image.field}
			}
				// 0: if.isTrue.field negate = {$plugin.tx_seodynamictag.excludeFirstImage.field}. 1: if.isTrue.field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
			begin =
			begin {
					// 0: if.isTrue.field negate = {$plugin.tx_seodynamictag.excludeFirstImage.field}. 1: if.isTrue.field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
				stdWrap =
				stdWrap {
						// 0: if.isTrue.field negate = {$plugin.tx_seodynamictag.excludeFirstImage.field}. 1: if.isTrue.field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
					cObject = COA
					cObject {
							// 0: if.isTrue.field negate = {$plugin.tx_seodynamictag.excludeFirstImage.field}
						10 = TEXT
						10 {
								// isTrue.field negate = {$plugin.tx_seodynamictag.excludeFirstImage.field}
							if =
							if {
									// field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
								isTrue =
								isTrue {
									field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
								}
								negate = 1
							}
							value = 0
						}
							// 1: if.isTrue.field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
						20 = TEXT
						20 {
								// isTrue.field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
							if =
							if {
									// field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
								isTrue =
								isTrue {
									field = {$plugin.tx_seodynamictag.excludeFirstImage.field}
								}
							}
							value = 1
						}
					}
				}
			}
			maxItems = 1
				// LOAD_REGISTER: seodynamictagImageAlt, seodynamictagImageHeight, seodynamictagImageWidth, seodynamictagImagePublicUrl
			renderObj = COA
			renderObj {
					// seodynamictagImageAlt, seodynamictagImageHeight, seodynamictagImageWidth, seodynamictagImagePublicUrl
				10 = LOAD_REGISTER
				10 {
					seodynamictagImageAlt {
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
					seodynamictagImageHeight {
							// data = file:current:height
						cObject = TEXT
						cObject {
							data = file:current:height
						}
					}
						// data = file:current:width
					seodynamictagImageWidth {
						cObject = TEXT
						cObject {
							data = file:current:width
						}
					}
					seodynamictagImagePublicUrl {
							// Thanks to Kevin Ditscheid: https://stackoverflow.com/questions/39489881/absolute-path-with-img-resource#39490745
						cObject = COA
						cObject {
                // Get extension from the current file
              10 = LOAD_REGISTER
              10 {
                extension {
                  cObject = CONTENT
                  cObject {
                    table.stdWrap {
                        // data = file:current:table_local
                      cObject = TEXT
                      cObject {
                        data = file:current:table_local
                      }
                    }
                    select {
                      pidInList = root
                        // data = file:current:uid_local
                      where = TEXT
                      where {
                        data = file:current:uid_local
                        noTrimWrap = |uid=| |
                      }
                    }
                      // field = extension
                    renderObj = TEXT
                    renderObj {
                      field = extension
                    }
                  }
                }
              }
              XXX20 = COA
              XXX20 {
                12 = TEXT
                12 {
                  data = register:extension
                  noTrimWrap = ||, |
                }
                20 = TEXT
                20 {
                  data = file:current:table_local
                  noTrimWrap = ||, | 
                }
                30 = TEXT
                30 {
                  data = file:current:uid_local
                  noTrimWrap = ||, |
                }
              }
                // Handle IMG_RESOURCE only, if extension is not vimeo and not youtube
              30 = CASE
              30 {
                  // data = register:extension
                key =
                key {
                  data = register:extension
                }
                default = TEXT
                default {
                  typolink{
                    parameter.stdWrap{
                        // file.import.data = file:current:uid
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
                vimeo = TEXT
                vimeo {
                  value =
                }
                youtube = TEXT
                youtube {
                  value =
                }
              }
						}
					}
				}
			}
		}
	}
}