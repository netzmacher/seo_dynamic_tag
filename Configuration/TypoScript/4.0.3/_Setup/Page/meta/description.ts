plugin.tx_seodynamictag_pi1 {
  page {
    // seo_dynamic_tag: description
    meta = 
    meta {
      description >
      //
      description {
      }
      description = {$plugin.tx_seodynamictag.default.description}
      description {
        // data = register:seodyntag_description
        cObject = TEXT
        cObject {
          data = register:seodyntag_description
        }
      }
    }
  }
}
// plugin.tx_seodynamictag_pi1



////////////////////////////////////////////////
//
// Global condition for the single view

[{$plugin.tx_seodynamictag.condition.single.begin}]
  page {
    meta {
    }
    // seo_dynamic_tag: description
    meta = 
    meta {
      description >
      // In case of {$plugin.tx_seodynamictag.condition.single.begin}
      description < plugin.tx_seodynamictag_pi1.page.meta.description
    }
  }
[{$plugin.tx_seodynamictag.condition.single.end}]

[global]
