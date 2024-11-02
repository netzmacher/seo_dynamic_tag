page {
  headerData {
    49442 {
      // empty statement for proper comments only
      60 {
      }
      // 10: google
      60 = COA
      60 {
        10 {
        }
        // google: comment, name, description, image
        10 = COA
        10 {
          // isFalse = $plugin.tx_seodynamictag.socialmedia.google.disabled (here: {$plugin.tx_seodynamictag.socialmedia.google.disabled})
          if = 
          if.isFalse = {$plugin.tx_seodynamictag.socialmedia.google.disabled}
          // comment, name, description, image
          10 = COA
          10 {
            if.isTrue.data = register:seodynamictagPid
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
                noTrimWrap = |<!-- | -->|
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
              // name data = register:seodynamictagTitle
              20 = TEXT
              20 {
                data = register:seodynamictagTitle
                noTrimWrap = |<meta itemprop="name" content="|" />|
              }
            }
            // 10: line feed. 20: description
            30 = COA
            30 {
              // isTrue.data = register:seodynamictagDescription
              if = 
              if.isTrue.data = register:seodynamictagDescription
              // line feed
              10 = TEXT
              10 {
                char = 10
              }
              // description: data = register:seodynamictagDescription
              20 = TEXT
              20 {
                data = register:seodynamictagDescription
                noTrimWrap = |<meta itemprop="description" content="|" />|
              }
            }
            // 10: line feed. 20: image
            40 = COA
            40 {
              // isTrue.data = register:seodynamictagImagePublicUrl
              if = 
              if.isTrue.data = register:seodynamictagImagePublicUrl
              // line feed
              10 = TEXT
              10 {
                char = 10
              }
              // image: data = register:seodynamictagImagePublicUrl
              20 = TEXT
              20 {
                data = register:seodynamictagImagePublicUrl
                noTrimWrap = |<meta itemprop="image" content="|" />|
              }
            }
          }
        }
      }
    }
  }
}
