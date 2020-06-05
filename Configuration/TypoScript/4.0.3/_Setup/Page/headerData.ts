plugin.tx_seodynamictag_pi1 {
	page {
			// Empty statement for proper comments only
		headerData {
		}
			// seo_dynamic_tag (global condition doesn't met): 49441, 49442
		headerData =
		headerData {
		}
	}
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:seo_dynamic_tag/Configuration/TypoScript/4.0.3/_Setup/Page/headerData/_setup.ts">

[{$plugin.tx_seodynamictag.condition.single.begin}]
  page {
			// Empty statement for proper comments only
    headerData {			
		}
			// seo_dynamic_tag (global condition met): 49441, 49442
    headerData =
    headerData {
      49441 >
      // seo_dynamic_tag: LOAD_REGISTER
      49441 < plugin.tx_seodynamictag_pi1.page.headerData.49441
      49442 >
      // seo_dynamic_tag: title, canonical tag
      49442 < plugin.tx_seodynamictag_pi1.page.headerData.49442
    }

  }
[{$plugin.tx_seodynamictag.condition.single.end}]
