var color = require('./color');
var template = require('./template');

var colors = {
		"activityBar.background": template.ui.background.tint1,
		"activityBar.border": template.ui.border,
		"activityBar.foreground": template.ui.foreground.tint1,
		"activityBarBadge.background": template.ui.accent,
    "activityBarBadge.foreground": "#000000",
    "activityBar.dropBackground": "#ffffff1f",
		"activityBar.inactiveForeground": template.ui.foreground.tint3,
		"badge.background": template.ui.accent,
		"badge.foreground": "#000000",
		"breadcrumb.activeSelectionForeground": template.ui.accent,
		"breadcrumb.background": template.ui.background.tint3,
		"breadcrumb.focusForeground": template.ui.foreground.tint1,
		"breadcrumb.foreground": template.ui.foreground.tint2,
		"breadcrumbPicker.background": template.ui.background.tint3,
    "button.background": template.ui.accent,
    "button.foreground": "#000000",
		"button.hoverBackground": template.ui.foreground.tint1,
		"debugToolBar.background": template.ui.background.tint3,
		"diffEditor.insertedTextBackground": color.opacity(template.ui.green, 15),
		"diffEditor.removedTextBackground": color.opacity(template.ui.red, 20),
		"dropdown.background": template.ui.background.tint1,
		"dropdown.border": template.ui.border,
		"editor.background": template.ui.background.tint2,
		"editor.findMatchBackground": "#000000",
		"editor.findMatchBorder": template.ui.accent,
		"editor.findMatchHighlightBackground": color.opacity(template.ui.selection, 40),
		"editor.findMatchHighlightBorder": template.ui.selection,
		"editor.foreground": template.ui.foreground.tint1,
		"editor.lineHighlightBackground": template.ui.background.tint1,
		"editor.selectionBackground": color.opacity(template.ui.selection, 40),
		"editor.selectionHighlightBackground": color.opacity(template.ui.cursor, 20),
		"editorBracketMatch.background": template.ui.background.tint2,
		"editorBracketMatch.border": color.opacity(template.ui.cursor, 50),
    "editorCursor.foreground": template.ui.cursor,
    "editorCodeLens.foreground": template.ui.foreground.tint3,
		"editorError.foreground": color.opacity(template.ui.red, 70),
		"editorGroup.border": template.ui.border,
    "editorGroup.dropBackground": color.opacity(template.ui.selection, 40),
    "editorGroupHeader.tabsBackground": template.ui.background.tint1,
    "editorGroupHeader.tabsBorder": template.ui.border,
		"editorGutter.addedBackground": color.opacity(template.ui.green, 60),
		"editorGutter.deletedBackground": color.opacity(template.ui.red, 60),
		"editorGutter.modifiedBackground": color.opacity(template.ui.blue, 60),
		"editorHoverWidget.background": template.ui.background.tint3,
    "editorHoverWidget.border": template.ui.border,
    "editor.hoverHighlightBackground": color.opacity(template.ui.selection, 40),
		"editorIndentGuide.activeBackground": template.ui.background.tint3,
		"editorIndentGuide.background": color.opacity(template.ui.background.tint3, 70),
		"editorInfo.foreground": color.opacity(template.ui.blue, 70),
		"editorLineNumber.activeForeground": "#ffffff",
		"editorLineNumber.foreground": template.ui.foreground.tint3,
		"editorLink.activeForeground": template.ui.foreground.tint1,
		"editorMarkerNavigation.background": color.opacity(template.ui.foreground.tint1, 05),
		"editorOverviewRuler.border": template.ui.transparent,
		"editorOverviewRuler.errorForeground": color.opacity(template.ui.red, 40),
		"editorOverviewRuler.findMatchForeground": template.ui.accent,
		"editorOverviewRuler.infoForeground": color.opacity(template.ui.blue, 40),
		"editorOverviewRuler.warningForeground": color.opacity(template.ui.yellow, 40),
		"editorRuler.foreground": template.ui.background.tint3,
		"editorSuggestWidget.background": template.ui.background.tint3,
		"editorSuggestWidget.border": template.ui.border,
		"editorSuggestWidget.foreground": template.ui.foreground.tint1,
		"editorSuggestWidget.highlightForeground": template.ui.accent,
		"editorSuggestWidget.selectedBackground": color.opacity(template.ui.selection, 40),
		"editorWarning.foreground": color.opacity(template.ui.yellow, 70),
		"editorWhitespace.foreground": color.opacity(template.ui.foreground.tint1, 40),
		"editorWidget.background": template.ui.background.tint3,
		"editorWidget.border": template.ui.border,
		"editorWidget.resizeBorder": template.ui.accent,
		"extensionButton.prominentBackground": template.ui.accent,
    "extensionButton.prominentHoverBackground": template.ui.foreground.tint1,
		"extensionButton.prominentForeground": "#000000",
    "extensionBadge.remoteBackground": template.ui.accent,
		"extensionBadge.remoteForeground": "#000000",
		"focusBorder": template.ui.transparent,
		"gitDecoration.conflictingResourceForeground": color.opacity(template.ui.yellow, 90),
		"gitDecoration.deletedResourceForeground": color.opacity(template.ui.red, 90),
		"gitDecoration.ignoredResourceForeground": color.opacity(template.ui.foreground.tint2, 90),
		"gitDecoration.modifiedResourceForeground": color.opacity(template.ui.blue, 90),
		"gitDecoration.untrackedResourceForeground": color.opacity(template.ui.green, 90),
		"input.background": template.ui.background.tint2,
		"input.border": template.ui.transparent,
		"input.foreground": template.ui.foreground.tint1,
		"input.placeholderForeground": color.opacity(template.ui.foreground.tint1, 60),
		"inputOption.activeBackground": color.opacity(template.ui.selection, 40),
		"inputOption.activeBorder": template.ui.selection,
		"inputValidation.errorBackground": template.ui.red,
		"inputValidation.errorForeground": "#ffffff",
		"inputValidation.errorBorder": template.ui.red,
		"inputValidation.infoBackground": template.ui.blue,
		"inputValidation.infoForeground": "#ffffff",
		"inputValidation.infoBorder": template.ui.blue,
		"inputValidation.warningBackground": template.ui.yellow,
		"inputValidation.warningForeground": "#ffffff",
		"inputValidation.warningBorder": template.ui.yellow,
		"list.activeSelectionBackground": color.opacity(template.ui.selection, 40),
		"list.activeSelectionForeground": template.ui.accent,
		"list.focusBackground": color.opacity(template.ui.selection, 40),
		"list.focusForeground": template.ui.accent,
		"list.highlightForeground": template.ui.accent,
		"list.hoverBackground": template.ui.transparent,
		"list.hoverForeground": template.ui.foreground.tint1,
		"list.inactiveSelectionBackground": template.ui.transparent,
		"list.inactiveSelectionForeground": "#ffffff",
		"listFilterWidget.background": color.opacity(template.ui.selection, 40),
		"listFilterWidget.noMatchesOutline": "#00000030",
		"listFilterWidget.outline": template.ui.selection,
		"menu.background": template.ui.background.tint2,
		"menu.foreground": template.ui.foreground.tint1,
		"menu.selectionBackground": "#00000050",
		"menu.selectionBorder": "#00000030",
		"menu.selectionForeground": template.ui.accent,
		"menu.separatorBackground": template.ui.foreground.tint1,
		"menubar.selectionBackground": "#00000030",
		"menubar.selectionBorder": "#00000030",
    "menubar.selectionForeground": template.ui.accent,
    "minimap.findMatchHighlight": template.ui.selection,
		"notificationLink.foreground": template.ui.accent,
		"notifications.background": template.ui.background.tint3,
    "notifications.foreground": template.ui.foreground.tint2,
    "notifications.border": template.ui.border,
    "notificationCenterHeader.background": template.ui.background.tint3,
    "notificationCenterHeader.foreground": template.ui.foreground.tint1,
    "notificationCenterHeader.border": template.ui.border,
		"panel.background": template.ui.background.tint3,
		"panel.border": template.ui.border,
		"panel.dropBackground": color.opacity(template.ui.selection, 40),
		"panelTitle.activeBorder": template.ui.transparent,
		"panelTitle.activeForeground": "#ffffff",
    "panelTitle.inactiveForeground": template.ui.foreground.tint2,
    //
		"peekView.border": template.ui.border,
		"peekViewEditor.background": template.ui.background.tint2,
		"peekViewEditor.matchHighlightBackground": color.opacity(template.ui.selection, 40),
		"peekViewEditorGutter.background": template.ui.background.tint3,
		"peekViewResult.background": template.ui.background.tint3,
		"peekViewResult.matchHighlightBackground": color.opacity(template.ui.selection, 40),
    "peekViewResult.selectionBackground": color.opacity(template.ui.selection, 40),
		"peekViewTitleLabel.foreground": template.ui.foreground.tint1,
		"peekViewTitle.background": template.ui.background.tint3,
    "peekViewTitleDescription.foreground": template.ui.foreground.tint2,
    //
    "pickerGroup.border": template.ui.border,
		"pickerGroup.foreground": template.ui.accent,
    "progressBar.background": template.ui.accent,
    "quickInput.background": template.ui.background.tint3,
		"quickInput.foreground": template.ui.foreground.tint2,
		"scrollbar.shadow": template.ui.transparent,
		"scrollbarSlider.activeBackground": color.opacity(template.ui.accent, 50),
		"scrollbarSlider.background": color.opacity(template.ui.foreground.tint1, 20),
		"scrollbarSlider.hoverBackground": color.opacity(template.ui.foreground.tint1, 20),
		"selection.background": template.ui.accent,
		"settings.checkboxBackground": template.ui.background.tint1,
		"settings.checkboxForeground": template.ui.foreground.tint1,
		"settings.dropdownBackground": template.ui.background.tint1,
		"settings.dropdownForeground": template.ui.foreground.tint1,
		"settings.headerForeground": template.ui.accent,
		"settings.modifiedItemIndicator": template.ui.accent,
		"settings.numberInputBackground": template.ui.background.tint1,
		"settings.numberInputForeground": template.ui.foreground.tint1,
		"settings.textInputBackground": template.ui.background.tint1,
		"settings.textInputForeground": template.ui.foreground.tint1,
		"sideBar.background": template.ui.background.tint1,
		"sideBar.border": template.ui.border,
    "sideBar.foreground": template.ui.foreground.tint2,
    "sideBar.dropBackground": color.opacity(template.ui.selection, 40),
		"sideBarSectionHeader.foreground": template.ui.foreground.tint2,
		"sideBarSectionHeader.background": template.ui.background.tint1,
		"sideBarSectionHeader.border": template.ui.border,
		"sideBarTitle.foreground": template.ui.foreground.tint1,
		"statusBar.background": template.ui.background.tint3,
		"statusBar.border": template.ui.border,
		"statusBar.debuggingBackground": template.ui.yellow,
		"statusBar.debuggingForeground": "#ffffff",
		"statusBar.foreground": template.ui.foreground.tint2,
    "statusBar.noFolderBackground": color.opacity(template.ui.accent, 40),
    "statusBar.noFolderForeground": template.ui.foreground.tint2,
		"statusBarItem.hoverBackground": template.ui.transparent,
		"statusBarItem.remoteBackground": template.ui.accent,
		"statusBarItem.remoteForeground": "#000000",
		// "tab.activeBorder": template.ui.border,
    "tab.activeForeground": "#ffffff",
    "tab.activeBackground": template.ui.background.tint3,
		"tab.activeModifiedBorder": template.ui.foreground.tint2,
    "tab.border": template.ui.border,
		"tab.inactiveBackground": template.ui.background.tint1,
		"tab.inactiveForeground": template.ui.foreground.tint2,
    "tab.inactiveModifiedBorder": template.ui.foreground.tint2,
		"tab.unfocusedActiveBorder": template.ui.background.tint2,
    "tab.unfocusedActiveForeground": template.ui.foreground.tint2,
		"tab.unfocusedActiveBackground": template.ui.background.tint2,
		"tab.unfocusedActiveModifiedBorder": template.ui.foreground.tint2,
		"tab.unfocusedInactiveForeground": template.ui.foreground.tint2,
    "tab.unfocusedInactiveModifiedBorder": template.ui.foreground.tint2,
    //
		"terminal.ansiBlack": "#000000",
		"terminal.ansiBlue": template.ui.blue,
		"terminal.ansiBrightBlack": template.ui.foreground.tint3,
		"terminal.ansiBrightBlue": template.ui.blue,
		"terminal.ansiBrightCyan": template.ui.cyan,
		"terminal.ansiBrightGreen": template.ui.green,
		"terminal.ansiBrightMagenta": template.ui.purple,
		"terminal.ansiBrightRed": template.ui.red,
		"terminal.ansiBrightWhite": "#ffffff",
		"terminal.ansiBrightYellow": template.ui.yellow,
		"terminal.ansiCyan": template.ui.cyan,
		"terminal.ansiGreen": template.ui.green,
		"terminal.ansiMagenta": template.ui.purple,
		"terminal.ansiRed": template.ui.red,
		"terminal.ansiWhite": "#ffffff",
		"terminal.ansiYellow": template.ui.yellow,
		"terminalCursor.background": "#000000",
    "terminalCursor.foreground": template.ui.cursor,
    //
		"textLink.activeForeground": template.ui.foreground.tint1,
		"textLink.foreground": template.ui.accent,
		"titleBar.activeBackground": template.ui.background.tint1,
		"titleBar.activeForeground": template.ui.foreground.tint1,
		"titleBar.border": template.ui.border,
		"titleBar.inactiveBackground": template.ui.background.tint1,
		"titleBar.inactiveForeground": template.ui.foreground.tint2,
    "tree.indentGuidesStroke": template.ui.background.tint3,
    "welcomePage.background": template.ui.background.tint2,
    "widget.shadow": "#00000020",
    //
		// "checkbox.background": template.ui.background.tint2,
		// "checkbox.border": "#ffffff10",
		// "checkbox.foreground": "#f0f0f0",
		// "debugExceptionWidget.background": "#420b0d",
		// "debugExceptionWidget.border": "#a31515",
		// "descriptionForeground": "#ccccccb3",
		// "dropdown.foreground": "#f0f0f0",
		// "editor.findRangeHighlightBackground": "#3a3d4166",
		// "editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
		// "editor.hoverHighlightBackground": "#264f7840",
		// "editor.inactiveSelectionBackground": "#717cb428",
		// "editor.lineHighlightBorder": "#282828",
		// "editor.rangeHighlightBackground": "#ffffff0b",
		// "editor.snippetFinalTabstopHighlightBorder": "#525252",
		// "editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
		// "editor.stackFrameHighlightBackground": "#ffff0033",
		// "editor.wordHighlightBackground": "#575757b8",
		// "editor.wordHighlightStrongBackground": "#004972b8",
		// "editorActiveLineNumber.foreground": "#c6c6c6",
		// "editorCodeLens.foreground": "#999999",
		// "editorGroupHeader.noTabsBackground": template.ui.background.tint2,
		// "editorGutter.background": template.ui.background.tint2,
		// "editorGutter.commentRangeForeground": "#c5c5c5",
		// "editorHint.foreground": "#eeeeeeb3",
		// "editorHoverWidget.statusBarBackground": "#31364a",
		// "editorMarkerNavigationError.background": template.ui.red, 70,
		// "editorMarkerNavigationInfo.background": template.ui.blue, 70,
		// "editorMarkerNavigationWarning.background": template.ui.yellow, 70,
		// "editorOverviewRuler.addedForeground": "#007acc99",
		// "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
		// "editorOverviewRuler.commonContentForeground": "#60606066",
		// "editorOverviewRuler.currentContentForeground": "#40c8ae80",
		// "editorOverviewRuler.deletedForeground": "#007acc99",
		// "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
		// "editorOverviewRuler.modifiedForeground": "#007acc99",
		// "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
		// "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
		// "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
		// "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
		// "editorPane.background": template.ui.background.tint2,
		// "editorUnnecessaryCode.opacity": "#000000aa",
		// "editorWidget.foreground": "#cccccc",
		// "errorForeground": "#f48771",
		// "extensionBadge.remoteBackground": template.ui.accent,
		// "extensionBadge.remoteForeground": "#000000",
		// "extensionButton.prominentForeground": "#ffffff",
		// "foreground": "#cccccc",
		// "gitDecoration.addedResourceForeground": "#81b88b",
		// "gitDecoration.submoduleResourceForeground": "#8db9e2",
		// "gitlens.gutterBackgroundColor": "#ffffff13",
		// "gitlens.gutterForegroundColor": "#bebebe",
		// "gitlens.gutterUncommittedForegroundColor": "#00bcf299",
		// "gitlens.lineHighlightBackgroundColor": "#00bcf233",
		// "gitlens.lineHighlightOverviewRulerColor": "#00bcf299",
		// "gitlens.trailingLineBackgroundColor": template.ui.transparent,
		// "gitlens.trailingLineForegroundColor": "#99999959",
		// "imagePreview.border": "#80808059",
		// "inlineTitleBar.background": template.ui.background.tint1,
		// "inputValidation.errorBackground": "#5a1d1d",
		// "inputValidation.infoBackground": "#063b49",
		// "inputValidation.warningBackground": "#352a05",
		// "list.dropBackground": template.ui.foreground.tint1, 20,
		// "list.errorForeground": "#f88070",
		// "list.invalidItemForeground": "#b89500",
		// "list.warningForeground": "#cca700",
		// "merge.commonContentBackground": "#60606029",
		// "merge.commonHeaderBackground": "#60606066",
		// "merge.currentContentBackground": "#40c8ae33",
		// "merge.currentHeaderBackground": "#40c8ae80",
		// "merge.incomingContentBackground": "#40a6ff33",
		// "merge.incomingHeaderBackground": "#40a6ff80",
		// "notificationCenterHeader.background": "#353a51",
		// "peekViewResult.fileForeground": "#ffffff",
		// "peekViewResult.lineForeground": "#bbbbbb",
		// "peekViewResult.selectionForeground": "#ffffff",
		// "peekViewTitleLabel.foreground": "#ffffff",
		// "pickerGroup.border": "#3f3f46",

		// "settings.checkboxBorder": "#ffffff10",
		// "settings.dropdownBorder": "#ffffff10",
		// "settings.dropdownListBorder": "#ff00ff",
		// "settings.numberInputBorder": "#ffffff10",
		// "settings.textInputBorder": "#ffffff10",

		// "statusBar.debuggingBorder": template.ui.border,
		// "statusBar.noFolderBorder": template.ui.border,
		// "statusBar.noFolderForeground": template.ui.foreground.tint3,
		// "statusBarItem.activeBackground": "#ffffff2e",
		// "statusBarItem.prominentBackground": "#00000080",
		// "statusBarItem.prominentForeground": template.ui.foreground.tint3,
		// "statusBarItem.prominentHoverBackground": "#0000004d",
		// "tab.activeBackground": template.ui.background.tint2,

		// "terminal.background": template.ui.background.tint1,
		// "terminal.border": template.ui.border,
		// "terminal.foreground": "#cccccc",
		// "terminal.selectionBackground": "#ffffff40",
		// "textBlockQuote.background": "#7f7f7f1a",
		// "textBlockQuote.border": "#007acc80",
		// "textCodeBlock.background": "#0a0a0a66",
		// "textPreformat.foreground": "#d7ba7d",
		// "textSeparator.foreground": "#ffffff2e"
  }

  var tokenColors = [
		{
			"name": "Invisible",
			"scope": "invisible",
			"settings": {
				"foreground": "#c5c8c6"
			}
		},
		{
			"name": "Comment",
			"scope": "comment",
			"settings": {
				"foreground": "#7C7C7C"
			}
		},
		{
			"name": "Entity",
			"scope": "entity",
			"settings": {
				"foreground": "#FFD2A7"
			}
		},
		{
			"name": "Entity Name Type",
			"scope": "entity.name.type",
			"settings": {
				"foreground": template.color.orange,
			}
		},
		{
			"name": "Entity Inherited Class",
			"scope": "entity.other.inherited-class",
			"settings": {
				"foreground": "#9B5C2E"
			}
		},
		{
			"name": "Keyword",
			"scope": "keyword",
			"settings": {
				"foreground": "#96CBFE"
			}
		},
		{
			"name": "Keyword Control",
			"scope": "keyword.control",
			"settings": {
				"foreground": "#96CBFE"
			}
		},
		{
			"name": "Keyword Operator",
			"scope": "keyword.operator",
			"settings": {
				"foreground": "#EDEDED"
			}
		},
		{
			"name": "Storage",
			"scope": "storage",
			"settings": {
				"foreground": "#CFCB90"
			}
		},
		{
			"name": "Storage Modifier",
			"scope": "storage.modifier",
			"settings": {
				"foreground": "#96CBFE"
			}
		},
		{
			"name": "Constant",
			"scope": "constant",
			"settings": {
				"foreground": "#99CC99"
			}
		},
		{
			"name": "Constant Numeric",
			"scope": "constant.numeric",
			"settings": {
				"foreground": "#FF73FD"
			}
		},
		{
			"name": "Variable",
			"scope": "variable",
			"settings": {
				"foreground": "#C6C5FE"
			}
		},
		{
			"name": "Invalid Deprecated",
			"scope": "invalid.deprecated",
			"settings": {
				"foreground": "#FD5FF1",
				"fontStyle": "underline"
			}
		},
		{
			"name": "Invalid Illegal",
			"scope": "invalid.illegal",
			"settings": {
				"foreground": "#FD5FF1",
				"background": "#A95AA9"
			}
		},
		{
			"name": "Invalid Illegal",
			"scope": "invalid.illegal",
			"settings": {
				"foreground": "#FD5FF1",
				"background": "#A95AA9"
			}
		},
		{
			"name": "String Source, Source String Meta Embedded",
			"scope": [
				"source string source",
				"source string meta.embedded.line"
			],
			"settings": {
				"foreground": "#EDEDED"
			}
		},
		{
			"name": "String Source Punctuation",
			"scope": "source string punctuation.section.embedded",
			"settings": {
				"foreground": "#00A0A0"
			}
		},
		{
			"name": "String Source Punctuation Source",
			"scope": "source string punctuation.section.embedded source",
			"settings": {
				"foreground": "#00A0A0"
			}
		},
		{
			"name": "String",
			"scope": "string",
			"settings": {
				"foreground": "#A8FF60"
			}
		},
		{
			"name": "String Constant",
			"scope": "string constant",
			"settings": {
				"foreground": "#00A0A0"
			}
		},
		{
			"name": "String Regexp",
			"scope": "string.regexp",
			"settings": {
				"foreground": "#E9C062"
			}
		},
		{
			"name": "String Regexp Exscaped or Embedded",
			"scope": [
				"string.regexp constant.character.escape",
				"string.regexp source.ruby.embedded",
				"string.regexp string.regexp.arbitrary-repitition"
			],
			"settings": {
				"foreground": "#FF8000"
			}
		},
		{
			"name": "String Regexp Group",
			"scope": "string.regexp.group",
			"settings": {
				"foreground": "#C6A24F",
				"background": "#595f65"
			}
		},
		{
			"name": "String Regexp Character-Class",
			"scope": "string.regexp.character-class",
			"settings": {
				"foreground": "#B18A3D"
			}
		},
		{
			"name": "String Variable",
			"scope": "string variable",
			"settings": {
				"foreground": "#8A9A95"
			}
		},
		{
			"name": "Support",
			"scope": "support",
			"settings": {
				"foreground": "#FFFFB6"
			}
		},
		{
			"name": "Support Function",
			"scope": "support.function",
			"settings": {
				"foreground": "#DAD085"
			}
		},
		{
			"name": "Support Constant",
			"scope": "support.constant",
			"settings": {
				"foreground": "#FFD2A7"
			}
		},
		{
			"name": "Support Type Property-Name CSS",
			"scope": "support.type.property-name.css",
			"settings": {
				"foreground": "#EDEDED"
			}
		},
		{
			"name": "Source Tags",
			"scope": [
				"source .entity.name.tag",
				"source .entity.other.attribute-name",
				"meta.tag.inline",
				"meta.tag.inline .entity"
			],
			"settings": {
				"foreground": "#96CBFE"
			}
		},
		{
			"name": "Source Tag Attribute Name",
			"scope": "entity.other.attribute-name",
			"settings": {
				"foreground": "#FFD7B1"
			}
		},
		{
			"name": "Source Tag and Attribute Namespace",
			"scope": [
				"entity.name.tag.namespace",
				"entity.other.attribute-name.namespace"
			],
			"settings": {
				"foreground": "#E18964"
			}
		},
		{
			"name": "C Preprocessor",
			"scope": "meta.preprocessor.c",
			"settings": {
				"foreground": "#8996A8"
			}
		},
		{
			"name": "C Preprocessor Keyword",
			"scope": "meta.preprocessor.c keyword",
			"settings": {
				"foreground": "#AFC4DB"
			}
		},
		{
			"name": "Cast",
			"scope": "meta.cast",
			"settings": {
				"foreground": "#676767"
			}
		},
		{
			"name": "Doctype",
			"scope": [
				"meta.sgml.html meta.doctype",
				".meta.sgml.html meta.doctype entity",
				"meta.sgml.html meta.doctype string",
				"meta.xml-processing",
				"meta.xml-processing entity",
				"meta.xml-processing string"
			],
			"settings": {
				"foreground": "#494949"
			}
		},
		{
			"name": "Meta Tag, Entity",
			"scope": [
				"meta.tag",
				"meta.tag .entity"
			],
			"settings": {
				"foreground": "#96CBFE"
			}
		},
		{
			"name": "Selector CSS Entiry Name Tag",
			"scope": "meta.selector.css entity.name.tag",
			"settings": {
				"foreground": "#96CBFE",
				"fontStyle": "underline"
			}
		},
		{
			"name": "Selector CSS Pseudo-Class",
			"scope": "meta.selector.css entity.other.attribute-name.pseudo-class",
			"settings": {
				"foreground": "#8F9D6A"
			}
		},
		{
			"name": "Selector CSS ID",
			"scope": "meta.selector.css entity.other.attribute-name.id",
			"settings": {
				"foreground": "#8B98AB"
			}
		},
		{
			"name": "Selector CSS Class",
			"scope": "meta.selector.css entity.other.attribute-name.class",
			"settings": {
				"foreground": "#62B1FE"
			}
		},
		{
			"name": "Selector CSS punctuation",
			"scope": "meta.selector.css entity.other.attribute-name punctuation",
			"settings": {
				"foreground": "#FFD2A7"
			}
		},
		{
			"name": "Selector CSS Support Constant Property Value",
			"scope": [
				"meta.property-group support.constant.property-value.css",
				"meta.property-value support.constant.property-value.css"
			],
			"settings": {
				"foreground": "#F9EE98"
			}
		},
		{
			"name": "Preprocessor At-Rule Keword Control",
			"scope": "meta.preprocessor.at-rule keyword.control.at-rule",
			"settings": {
				"foreground": "#8693A5"
			}
		},
		{
			"name": "CSS Property value Support Constant, Named Color",
			"scope": [
				"meta.property-value support.constant.color.css",
				"meta.property-value constant"
			],
			"settings": {
				"foreground": "#87C38A"
			}
		},
		{
			"name": "CSS Constructor Argument",
			"scope": "meta.constructor.argument.css",
			"settings": {
				"foreground": "#8F9D6A"
			}
		},
		{
			"name": "Meta Diff, Diff Header",
			"scope": [
				"meta.diff",
				"meta.diff.header"
			],
			"settings": {
				"foreground": "#F8F8F8",
				"background": "#0E2231"
			}
		},
		{
			"name": "Meta Separator",
			"scope": "meta.separator",
			"settings": {
				"foreground": "#60A633",
				"background": "#242424"
			}
		},
		{
			"scope": "token.info-token",
			"settings": {
				"foreground": "#6796e6"
			}
		},
		{
			"scope": "token.warn-token",
			"settings": {
				"foreground": "#cd9731"
			}
		},
		{
			"scope": "token.error-token",
			"settings": {
				"foreground": "#f44747"
			}
		},
		{
			"scope": "token.debug-token",
			"settings": {
				"foreground": "#b267e6"
			}
		}
	]
  
// var tokenColors = [
//   {
//     name: "Comment",
//     scope: [
//       "comment"
//     ],
//     settings: {
//       "fontStyle": "italic",
//       "foreground": template.syntax.comment
//     }
//   },
//   {
//     name: "String",
//     scope: [
//       "string",
//       "constant.other.symbol"
//     ],
//     settings: {
//       "foreground": template.syntax.string
//     }
//   },
//   {
//     name: "Regular Expressions and Escape Characters",
//     scope: [
//       "string.regexp",
//       "constant.character",
//       "constant.other"
//     ],
//     settings: {
//       "foreground": template.syntax.constant
//     }
//   },
//   {
//     name: "Number",
//     scope: [
//       "constant.numeric"
//     ],
//     settings: {
//       "foreground": template.syntax.constant
//     }
//   },
//   {
//     name: "Built-in constants",
//     scope: [
//       "constant.language"
//     ],
//     settings: {
//       "foreground": template.syntax.constant
//     }
//   },
//   {
//     name: "Variable",
//     scope: [
//       "variable"
//     ],
//     settings: {
//       "foreground": template.syntax.variable
//     }
//   },
//   {
//     name: "Member Variable",
//     scope: [
//       "variable.member"
//     ],
//     settings: {
//       "foreground": template.syntax.value
//     }
//   },
//   {
//     name: "Language variable",
//     scope: [
//       "variable.language"
//     ],
//     settings: {
//       "foreground": template.syntax.language
//     }
//   },
//   {
//     name: "Storage",
//     scope: [
//       "storage"
//     ],
//     settings: {
//       "foreground": template.syntax.storage
//     }
//   },
//   {
//     name: "Keyword",
//     scope: [
//       "keyword"
//     ],
//     settings: {
//       "foreground": template.syntax.keyword
//     }
//   },
//   {
//     name: "Operators",
//     scope: [
//       "keyword.operator"
//     ],
//     settings: {
//       "foreground": template.syntax.operator
//     }
//   },
//   {
//     name: "Separators like ; or ,",
//     scope: [
//       "punctuation.separator",
//       "punctuation.terminator"
//     ],
//     settings: {
//       "foreground": template.syntax.punctuation
//     }
//   },
//   {
//     name: "Punctuation",
//     scope: [
//       "punctuation.section"
//     ],
//     settings: {
//       "foreground": template.syntax.punctuation
//     }
//   },
//   {
//     name: "Accessor",
//     scope: [
//       "punctuation.accessor"
//     ],
//     settings: {
//       "foreground": template.syntax.punctuation
//     }
//   },
//   {
//     name: "Types fixes",
//     scope: [
//       "source.java storage.type",
//       "source.haskell storage.type",
//       "source.c storage.type"
//     ],
//     settings: {
//       "foreground": template.syntax.class
//     }
//   },
//   {
//     name: "Inherited class type",
//     scope: [
//       "entity.other.inherited-class"
//     ],
//     settings: {
//       "foreground": template.syntax.entity
//     }
//   },
//   {
//     name: "Lambda arrow",
//     scope: [
//       "storage.type.function"
//     ],
//     settings: {
//       "foreground": template.syntax.libraryFunction
//     }
//   },
//   {
//     name: "Java primitive variable types",
//     scope: [
//       "source.java storage.type.primitive"
//     ],
//     settings: {
//       "foreground": template.syntax.language
//     }
//   },
//   {
//     name: "Function name",
//     scope: [
//       "entity.name.function"
//     ],
//     settings: {
//       "foreground": template.syntax.function
//     }
//   },
//   {
//     name: "Function arguments",
//     scope: [
//       "variable.parameter",
//       "meta.parameter"
//     ],
//     settings: {
//       "foreground": template.syntax.parameter
//     }
//   },
//   {
//     name: "Function call",
//     scope: [
//       "variable.function",
//       "variable.annotation",
//       "meta.function-call.generic",
//       "support.function.go"
//     ],
//     settings: {
//       "foreground": template.syntax.libraryFunction
//     }
//   },
//   {
//     name: "Library function",
//     scope: [
//       "support.function",
//       "support.macro"
//     ],
//     settings: {
//       "foreground": template.syntax.libraryFunction
//     }
//   },
//   {
//     name: "Imports and packages",
//     scope: [
//       "token.package.keyword",
//       "entity.name.import",
//       "entity.name.package"
//     ],
//     settings: {
//       "foreground": template.syntax.import
//     }
//   },
//   {
//     name: "Entity name",
//     scope: [
//       "entity.name"
//     ],
//     settings: {
//       "foreground": template.syntax.entity
//     }
//   },
//   {
//     name: "Tag",
//     scope: [
//       "entity.name.tag",
//       "meta.tag.sgml"
//     ],
//     settings: {
//       "foreground": template.syntax.tag
//     }
//   },
//   {
//     name: "Tag start/end",
//     scope: [
//       "punctuation.definition.tag.end",
//       "punctuation.definition.tag.begin",
//       "punctuation.definition.tag"
//     ],
//     settings: {
//       "foreground": template.syntax.punctuation
//     }
//   },
//   {
//     name: "Tag attribute",
//     scope: [
//       "entity.other.attribute-name"
//     ],
//     settings: {
//       "foreground": template.syntax.tag
//     }
//   },
//   {
//     name: "Library constant",
//     scope: [
//       "support.constant"
//     ],
//     settings: {
//       "fontStyle": "italic",
//       "foreground": template.syntax.constant
//     }
//   },
//   {
//     name: "Library class/type",
//     scope: [
//       "support.type",
//       "support.class",
//       "source.go storage.type"
//     ],
//     settings: {
//       "foreground": template.syntax.language
//     }
//   },
//   {
//     name: "Decorators/annotation",
//     scope: [
//       "meta.decorator variable.other",
//       "meta.decorator punctuation.decorator",
//       "storage.type.annotation"
//     ],
//     settings: {
//       "foreground": template.syntax.punctuation
//     }
//   },
//   {
//     name: "Invalid",
//     scope: [
//       "invalid"
//     ],
//     settings: {
//       "foreground": template.ui.red
//     }
//   },
//   {
//     name: "diff.header",
//     scope: [
//       "meta.diff",
//       "meta.diff.header"
//     ],
//     settings: {
//       "foreground": template.color.red
//     }
//   },
//   {
//     name: "Ruby class methods",
//     scope: [
//       "source.ruby variable.other.readwrite"
//     ],
//     settings: {
//       "foreground": template.syntax.function
//     }
//   },
//   {
//     name: "CSS tag names",
//     scope: [
//       "source.css entity.name.tag",
//       "source.sass entity.name.tag",
//       "source.scss entity.name.tag",
//       "source.less entity.name.tag",
//       "source.stylus entity.name.tag"
//     ],
//     settings: {
//       "foreground": template.syntax.keyword
//     }
//   },
//   {
//     name: "CSS browser prefix",
//     scope: [
//       "source.css support.type",
//       "source.sass support.type",
//       "source.scss support.type",
//       "source.less support.type",
//       "source.stylus support.type"
//     ],
//     settings: {
//       "foreground": template.ui.foreground.tint2
//     }
//   },
//   {
//     name: "CSS Properties",
//     scope: [
//       "support.type.property-name"
//     ],
//     settings: {
//       "foreground": template.ui.foreground.tint1
//     }
//   },
//   {
//     scope: [
//       "message.error"
//     ],
//     settings: {
//       "foreground": template.ui.red
//     }
//   },
//   {
//     name: "Markup heading",
//     scope: [
//       "markup.heading",
//       "markup.heading entity.name"
//     ],
//     settings: {
//       "fontStyle": "bold",
//       "foreground": template.syntax.entity
//     }
//   },
//   {
//     name: "Markup links",
//     scope: [
//       "markup.underline.link",
//       "string.other.link"
//     ],
//     settings: {
//       "foreground": template.color.purple.blue
//     }
//   },
//   {
//     name: "Markup Italic",
//     scope: [
//       "markup.italic"
//     ],
//     settings: {
//       "fontStyle": "italic",
//       "foreground": template.color.purple.yellow
//     }
//   },
//   {
//     name: "Markup Bold",
//     scope: [
//       "markup.bold"
//     ],
//     settings: {
//       "fontStyle": "bold",
//       "foreground": template.color.purpleLight
//     }
//   },
//   {
//     name: "Markup Bold/italic",
//     scope: [
//       "markup.italic markup.bold",
//       "markup.bold markup.italic"
//     ],
//     settings: {
//       "fontStyle": "bold italic",
//       "foreground": template.color.purpleLight
//     }
//   },
//   {
//     name: "Markup Code",
//     scope: [
//       "markup.raw"
//     ],
//     settings: {
//       "background": "#cbccc605"
//     }
//   },
//   {
//     name: "Markup Code Inline",
//     scope: [
//       "markup.raw.inline"
//     ],
//     settings: {
//       "background": "#cbccc60f"
//     }
//   },
//   {
//     name: "Markdown Separator",
//     scope: [
//       "meta.separator"
//     ],
//     settings: {
//       "fontStyle": "bold",
//       "background": "#cbccc60f",
//       "foreground": "#5c6773"
//     }
//   },
//   {
//     name: "Markup Blockquote",
//     scope: [
//       "markup.quote"
//     ],
//     settings: {
//       "foreground": template.color.red,
//       "fontStyle": "italic"
//     }
//   },
//   {
//     name: "Markup List Bullet",
//     scope: [
//       "markup.list punctuation.definition.list.begin"
//     ],
//     settings: {
//       "foreground": template.color.pink
//     }
//   },
//   {
//     name: "Markup added",
//     scope: [
//       "markup.inserted"
//     ],
//     settings: {
//       "foreground": template.ui.green
//     }
//   },
//   {
//     name: "Markup modified",
//     scope: [
//       "markup.changed"
//     ],
//     settings: {
//       "foreground": template.ui.blue
//     }
//   },
//   {
//     name: "Markup removed",
//     scope: [
//       "markup.deleted"
//     ],
//     settings: {
//       "foreground": template.ui.red
//     }
//   },
//   {
//     name: "Markup Strike",
//     scope: [
//       "markup.strike"
//     ],
//     settings: {
//       "foreground": template.ui.yellow
//     }
//   },
//   {
//     name: "Markup Table",
//     scope: [
//       "markup.table"
//     ],
//     settings: {
//       "background": color.opacity(template.ui.accent, 40),
//       "foreground": template.ui.accent
//     }
//   },
//   {
//     name: "Markup Raw Inline",
//     scope: [
//       "text.html.markdown markup.inline.raw"
//     ],
//     settings: {
//       "foreground": template.syntax.keyword
//     }
//   },
//   {
//     name: "Markdown - Line Break",
//     scope: [
//       "text.html.markdown meta.dummy.line-break"
//     ],
//     settings: {
//       "background": template.ui.foreground.tint3,
//       "foreground": template.ui.foreground.tint3
//     }
//   },
//   {
//     name: "Markdown - Raw Block Fenced",
//     scope: [
//       "punctuation.definition.markdown"
//     ],
//     settings: {
//       "background": template.ui.foreground.tint2,
//       "foreground": template.ui.background.tint2
//     }
//   },
//   {
//     scope: "token.info-token",
//     settings: {
//       "foreground": template.color.brightBlue
//     }
//   },
//   {
//     scope: "token.warn-token",
//     settings: {
//       "foreground": template.color.orange
//     }
//   },
//   {
//     scope: "token.error-token",
//     settings: {
//       "foreground": template.color.pink
//     }
//   },
//   {
//     scope: "token.debug-token",
//     settings: {
//       "foreground": template.color.yellow
//     }
//   }
// ]

exports.name = 'Dark Matter'
exports.$schema = "vscode://schemas/color-theme"
exports.type = 'dark'
exports.colors = colors
exports.tokenColors = tokenColors