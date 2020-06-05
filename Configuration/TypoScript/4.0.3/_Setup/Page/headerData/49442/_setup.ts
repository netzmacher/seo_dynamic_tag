plugin.tx_seodynamictag_pi1 {
  page {
    headerData {
				// Empty statement for proper comments only
      49442 {
			}
        // seo_dynamic_tag: 20: title, 40: canonical tag, 60: meta
      49442 = COA
      49442 {
          // comment
        10 = COA
        10 {
					10 = TEXT
					10 {
						char = 10
					}
					20 = TEXT
					20 {
						value = Search Engine Optimisation by EXT:seo_dynamic_tag
						noTrimWrap = |  <!-- | -->|
					}
					30 = TEXT
					30 {
						char = 10
					}
        }
        20 = COA
        20 {
					// include title
				}
          // line feed
        30 = TEXT
        30 {
          char = 10
        }
        40 = COA
        40 {
					// 40: include canonical
				}
          // line feed
        50 = TEXT
        50 {
          char = 10
        }
        60 = COA
        60 {
					// 60: include meta
				}
      }
    }
  }
}
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:seo_dynamic_tag/Configuration/TypoScript/4.0.3/_Setup/Page/headerData/49442/20.title.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:seo_dynamic_tag/Configuration/TypoScript/4.0.3/_Setup/Page/headerData/49442/40.canonical.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:seo_dynamic_tag/Configuration/TypoScript/4.0.3/_Setup/Page/headerData/49442/60.socialmedia.ts">