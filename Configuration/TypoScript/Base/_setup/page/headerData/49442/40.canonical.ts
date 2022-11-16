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
					// char = 10
				10 = TEXT
				10 {
					char = 10
				}
				20 = TEXT
				20 {
					typolink {
						parameter.data				= page:uid
						additionalParams.data	= register:seodynamictagAdditionalParams
						forceAbsoluteUrl			= 1
						returnLast						= url
					}
					noTrimWrap = |<link rel="canonical" href="|"/>|
				}
			}
		}
	}
}