export const manifest = {
  screens: {
    scr_mycio6: { name: "Splash", route: "/", state: { "autoAdvance": false }, position: { "x": 160, "y": 220 } },
    scr_81m7p7: { name: "Welcome", route: "/welcome", position: { "x": 1560, "y": 220 } },
    scr_u2cqs5: { name: "Register", route: "/register", position: { "x": 4360, "y": 220 } },
    scr_0lnn1c: { name: "Login", route: "/login", position: { "x": 5760, "y": 220 } },
    scr_8xad0i: { name: "Language Selection", route: "/language", position: { "x": 2960, "y": 220 } },
    scr_vre05s: { name: "Dashboard", route: "/dashboard", position: { "x": 160, "y": 2200 } },
    scr_swp0kl: { name: "Create New Case", route: "/case/new", position: { "x": 160, "y": 4180 } },
    scr_dqk1b6: { name: "Document Scanner", route: "/scan", position: { "x": 1560, "y": 4180 } },
    scr_7qmvvg: { name: "OCR Verification", route: "/verify", position: { "x": 2960, "y": 4180 } },
    scr_02q75l: { name: "Personalized Workflow", route: "/workflow", position: { "x": 1560, "y": 2200 } },
    scr_cc8gew: { name: "Task Details", route: "/task/insurance-claim", position: { "x": 4360, "y": 4180 } },
    scr_fm54wd: { name: "AI Assistant", route: "/assistant", position: { "x": 160, "y": 6160 } },
    scr_kgkfoq: { name: "Document Vault", route: "/vault", position: { "x": 1560, "y": 6160 } },
    scr_bvcihs: { name: "Notifications", route: "/notifications", position: { "x": 1560, "y": 8140 } },
    scr_vnguzh: { name: "Settings", route: "/settings", position: { "x": 160, "y": 8140 } },
    scr_8cwaqs: { name: "Case Completion", route: "/complete", position: { "x": 5760, "y": 4180 } }
  },
  sections: {
    sec_swl22u: { name: "Onboarding & Authentication", x: 0, y: 0, width: 7120, height: 1180 },
    sec_83b285: { name: "Main Application", x: 0, y: 1980, width: 2920, height: 1180 },
    sec_rxztfo: { name: "Case Management Workflow", x: 0, y: 3960, width: 7120, height: 1180 },
    sec_afmmg7: { name: "AI & Knowledge Tools", x: 0, y: 5940, width: 2920, height: 1180 },
    sec_2vtbin: { name: "User Preferences", x: 0, y: 7920, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_swl22u", children: [
    { kind: "screen", id: "scr_mycio6" },
    { kind: "screen", id: "scr_81m7p7" },
    { kind: "screen", id: "scr_8xad0i" },
    { kind: "screen", id: "scr_u2cqs5" },
    { kind: "screen", id: "scr_0lnn1c" }]
  },
  { kind: "section", id: "sec_83b285", children: [
    { kind: "screen", id: "scr_vre05s" },
    { kind: "screen", id: "scr_02q75l" }]
  },
  { kind: "section", id: "sec_rxztfo", children: [
    { kind: "screen", id: "scr_swp0kl" },
    { kind: "screen", id: "scr_dqk1b6" },
    { kind: "screen", id: "scr_7qmvvg" },
    { kind: "screen", id: "scr_cc8gew" },
    { kind: "screen", id: "scr_8cwaqs" }]
  },
  { kind: "section", id: "sec_afmmg7", children: [
    { kind: "screen", id: "scr_fm54wd" },
    { kind: "screen", id: "scr_kgkfoq" }]
  },
  { kind: "section", id: "sec_2vtbin", children: [
    { kind: "screen", id: "scr_vnguzh" },
    { kind: "screen", id: "scr_bvcihs" }]
  }]

};