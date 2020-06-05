plugin.tx_seodynamictag {

  # cat=Seo Dynamic Tag - Canonical Tag*//100;   type=boolean;    label= Enabled: If you don't like the canonical tag, disable it.
  canonical.enabled                 =
  # cat=Seo Dynamic Tag - Canonical Tag*//301;   type=string;     label= Allowed parameter (single view)*:*Obligate! Allowed URL parameter for the single view. Example: &tx_browser_pi1[showUid]={GP:tx_browser_pi1|showUid}
  canonical.single.additionalParams =
  # cat=Seo Dynamic Tag - Canonical Tag*//401;   type=boolean;    label= Use cash hash: Recommended. Use a cash hash parameter for a unique URL.
  canonical.useCashHash             = 1
}
