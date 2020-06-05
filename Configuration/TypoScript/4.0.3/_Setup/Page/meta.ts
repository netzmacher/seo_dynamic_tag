plugin.tx_seodynamictag_pi1 {
    // headerData, meta, 49442
  page =
  page {
	}
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:seo_dynamic_tag/Configuration/TypoScript/4.0.3/_Setup/Page/meta/_setup.ts">

[{$plugin.tx_seodynamictag.condition.single.begin}]
  page {
    meta {
      author      >
      // by seo_dynamic_tag
      author      < plugin.tx_seodynamictag_pi1.page.meta.author
      description >
      // by seo_dynamic_tag
      description < plugin.tx_seodynamictag_pi1.page.meta.description
      keywords    >
      // by seo_dynamic_tag
      keywords    < plugin.tx_seodynamictag_pi1.page.meta.keywords
    }
  }
[{$plugin.tx_seodynamictag.condition.single.end}]