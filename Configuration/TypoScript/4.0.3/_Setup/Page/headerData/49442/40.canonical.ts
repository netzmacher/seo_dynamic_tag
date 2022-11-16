page {
	headerData {
		49442 {
			XXX40 {
			}
				// 40: canonical tag
			XXX40 = COA
			XXX40 {
					// if.isTrue = {$plugin.tx_seodynamictag.canonical.enabled}
				if =
				if {
					isTrue = {$plugin.tx_seodynamictag.canonical.enabled}
				}
				10 = TEXT
				10 {
					if.isTrue.data = register:seodynamictagPid
					typolink {
						parameter {
							data = page:uid
						}
						// 200604, dwildt: :TODO: additionalParams should generated automatically!
						additionalParams = {$plugin.tx_seodynamictag.canonical.single.additionalParams}
						additionalParams {
							insertData = 1
						}
						forceAbsoluteUrl  = 1
						returnLast        = url
					}
					noTrimWrap = |  <link rel="canonical" href="|"/>|
				}
			}
		}
	}
}
