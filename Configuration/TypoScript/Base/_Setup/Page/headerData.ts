plugin.tx_seodynamictag_pi1 {
	page {
			// Empty statement for proper comments only
		headerData {
		}
			// 49441, 49442
		headerData =
		headerData {
		}
	}
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:seo_dynamic_tag/Configuration/TypoScript/Base/_Setup/Page/headerData/_setup.ts">

[{$plugin.tx_seodynamictag.condition.single.begin}]
  page {
			// for proper comments only
    headerData {			
		}
			// seo_dynamic_tag: 49442 (title, canonical tag)
    headerData =
    headerData {
      49441 >
      // LOAD_REGISTER
      49441 < plugin.tx_seodynamictag_pi1.page.headerData.49441
      49442 >
      // seo_dynamic_tag: title, canonical tag
      49442 < plugin.tx_seodynamictag_pi1.page.headerData.49442
    }

  }
[{$plugin.tx_seodynamictag.condition.single.end}]
