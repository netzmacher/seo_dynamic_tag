plugin.tx_seodynamictag_pi1 {
  page {
    headerData {
      49442 {
        40 {
				}
          // 40: canonical tag
        40 = COA
        40 {
						// if.isTrue = {$plugin.tx_seodynamictag.canonical.enabled}
          if =
          if {
            isTrue = {$plugin.tx_seodynamictag.canonical.enabled}
          }
          10 = TEXT
          10 {
            typolink {
              parameter {
                data = page:uid
              }
              additionalParams = {$plugin.tx_seodynamictag.canonical.single.additionalParams}
              additionalParams {
                insertData = 1
              }
              forceAbsoluteUrl  = 1
              returnLast        = url
              useCacheHash      = {$plugin.tx_seodynamictag.canonical.useCashHash}
            }
						noTrimWrap = |  <link rel="canonical" href="|"/>|
          }
        }
      }
    }
  }
}