page {
		// empty statement for proper comments only
	7 {
	}
		// 10
	7 = COA
	7 {
			// Sets the registers: seodynamictagTable, seodynamictagUid, seodynamictagPid, seodynamictagAdditionalParams
		10 = USER
		10 {
			userFunc = Netzmacher\SeoDynamicTag\Userfunc\PluginUserfunc->SetRegisterParamsPidTableUid
			plugins < plugin.tx_seodynamictag.setup.plugins
		}
	}
}