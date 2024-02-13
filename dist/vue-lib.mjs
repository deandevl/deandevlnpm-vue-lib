import { openBlock as a, createElementBlock as r, createElementVNode as o, toDisplayString as h, normalizeClass as y, withDirectives as b, vModelText as B, normalizeStyle as d, Fragment as p, renderList as f, createCommentVNode as g, renderSlot as k, vShow as v, createTextVNode as x, vModelDynamic as P, resolveComponent as S, createVNode as w, withCtx as T, TransitionGroup as j } from "vue";
const m = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [u, i] of t)
    s[u] = i;
  return s;
}, L = {
  name: "ActiveListComp",
  props: {
    inputSize: {
      type: Number,
      default: 20
    },
    title: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: "Enter a value"
    },
    dropPanelHeight: {
      type: String,
      default: "100px"
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    activeListCompItems: null
  },
  data() {
    return {
      input_value: null,
      input_list_value: null,
      input_list_placeholder: "Update item",
      items: [],
      is_open: !1,
      current_edit_item: null,
      panel_style: "width: 0; height: 0; transition: all 3s; opacity: 0;"
    };
  },
  mounted() {
    this.$nextTick(function() {
      if (this.cssVariables !== null)
        for (let e of Object.keys(this.cssVariables))
          this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
    });
  },
  methods: {
    input_focusout: function(e) {
      e.editing = !1;
    },
    compute_placeholder: function(e) {
      return "Update " + e.value;
    },
    add_item: function() {
      this.input_value !== null && (this.items.push({ value: this.input_value, editing: !1 }), this.is_open || this.toggle_state()), this.emit_items();
    },
    turn_on_edit: function(e) {
      this.current_edit_item = e, this.input_list_placeholder = "Update " + e.value, e.editing = !0;
    },
    update_item: function() {
      this.input_list_value !== null && (this.current_edit_item.value = this.input_list_value, this.current_edit_item.editing = !1, this.emit_items(), this.current_edit_item = null);
    },
    trash_item: function(e) {
      const t = this.items.indexOf(e);
      this.items.splice(t, 1), this.input_value = null, this.items.length === 0 && this.toggle_state(), this.emit_items();
    },
    arrow_clicked: function() {
      this.toggle_state();
    },
    toggle_state: function() {
      this.is_open ? (this.is_open = !1, this.panel_style = "height: 0;transition: all 3s; opacity: 0;", this.current_edit_item !== null && (this.current_edit_item.editing = !1, this.current_edit_item = null)) : (this.is_open = !0, this.panel_style = "height: " + this.drop_panel_height + ";transition: all 3s; opacity: 1.0;");
    },
    emit_items: function() {
      const e = [];
      for (let t of this.items)
        e.push(t.value);
      this.$emit("activeListCompItems", e);
    }
  }
}, I = { class: "activeList" }, N = { class: "activeList_title" }, E = { class: "activeList_inputSec" }, M = ["size", "placeholder"], A = {
  key: 0,
  class: "activeList_listSec"
}, W = { class: "activeList_list" }, H = {
  key: 0,
  class: "activeList_noEditBox"
}, z = ["onClick"], R = ["onClick"], D = { key: 1 }, J = ["size", "placeholder", "onFocusout"];
function F(e, t, s, u, i, l) {
  return a(), r("div", I, [
    o("div", N, h(s.title), 1),
    o("section", E, [
      o("div", {
        class: y([i.is_open ? "activeList_arrowIcon__open" : "activeList_arrowIcon__closed"]),
        onClick: t[0] || (t[0] = (...n) => l.arrow_clicked && l.arrow_clicked(...n))
      }, null, 2),
      b(o("input", {
        "onUpdate:modelValue": t[1] || (t[1] = (n) => i.input_value = n),
        class: "activeList_input",
        size: s.inputSize,
        placeholder: s.placeholder,
        onChange: t[2] || (t[2] = (...n) => l.add_item && l.add_item(...n))
      }, null, 40, M), [
        [B, i.input_value]
      ])
    ]),
    i.items.length > 0 ? (a(), r("div", A, [
      o("ul", W, [
        o("div", {
          class: "activeList_panel",
          style: d(i.panel_style)
        }, [
          (a(!0), r(p, null, f(i.items, (n, _) => (a(), r("li", { key: _ }, [
            n.editing ? n.editing ? (a(), r("div", D, [
              b(o("input", {
                "onUpdate:modelValue": t[3] || (t[3] = (c) => i.input_list_value = c),
                class: "activeList_input",
                size: s.inputSize,
                placeholder: i.input_list_placeholder,
                onChange: t[4] || (t[4] = (...c) => l.update_item && l.update_item(...c)),
                onFocusout: (c) => l.input_focusout(n)
              }, null, 40, J), [
                [B, i.input_list_value]
              ])
            ])) : g("", !0) : (a(), r("div", H, [
              o("span", null, h(n.value), 1),
              o("div", {
                class: "activeList_editIcon",
                onClick: (c) => l.turn_on_edit(n)
              }, null, 8, z),
              o("div", {
                class: "activeList_trashIcon",
                onClick: (c) => l.trash_item(n)
              }, null, 8, R)
            ]))
          ]))), 128))
        ], 4)
      ])
    ])) : g("", !0)
  ]);
}
const ls = /* @__PURE__ */ m(L, [["render", F]]), U = {
  name: "ButtonComp",
  props: {
    cssVariables: {
      type: Object,
      default: null
    }
  },
  emits: {
    buttonCompClicked: null
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    div_clicked: function(e) {
      this.$emit("buttonCompClicked", e);
    }
  }
};
function q(e, t, s, u, i, l) {
  return a(), r("div", {
    class: "buttonComp",
    onClick: t[0] || (t[0] = (n) => l.div_clicked(n))
  }, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const is = /* @__PURE__ */ m(U, [["render", q], ["__scopeId", "data-v-36868c70"]]), G = {
  name: "CheckerComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    singleCheck: {
      type: Boolean,
      default: !1
    },
    dropPanelHeight: {
      type: String,
      default: "100px"
    },
    blurPanel: {
      type: Boolean,
      default: !0
    },
    cssVariables: {
      type: Object,
      default: null
    }
  },
  emits: {
    checkerCompCheckedText: null
  },
  data() {
    return {
      updated_items: null,
      is_open: !1,
      panel_style: "width: 0; height: 0; transition: all 3s; opacity: 0;"
    };
  },
  computed: {
    itemsClone() {
      let e = null;
      return this.updated_items === null ? e = JSON.parse(JSON.stringify(this.items)) : this.updated_items !== null && (e = this.updated_items), this.send_checked(e), e;
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    item_class: function(e) {
      return this.itemsClone[e].checked ? ["checkerComp_item__checked", "checkerComp_item"] : ["checkerComp_item__notchecked", "checkerComp_item"];
    },
    send_checked: function(e) {
      const t = [];
      for (let s = 0; s < e.length; s++)
        e[s].checked && t.push(e[s].text);
      this.$emit("checkerCompCheckedText", t);
    },
    blur_it: function() {
      this.is_open && this.blurPanel && (this.is_open = !1, this.panel_style = "height: 0;transition: all 3s; opacity: 0;");
    },
    icon_click: function() {
      this.toggle_panel_state();
    },
    item_click: function(e) {
      const t = this.itemsClone;
      if (t[e].checked = !t[e].checked, this.singleCheck)
        for (let s = 0; s < t.length; s++)
          s !== e && (t[s].checked = !1);
      this.updated_items = t;
    },
    toggle_panel_state: function() {
      this.is_open ? (this.is_open = !1, this.panel_style = "height: 0;transition: all 3s; opacity: 0;") : (this.is_open = !0, this.panel_style = "height: " + this.dropPanelHeight + ";transition: all 3s; opacity: 1.0;");
    }
  }
}, K = { class: "checkerComp_headerSec" }, Q = { class: "checkerComp_itemsSec" }, X = ["onClick"];
function Y(e, t, s, u, i, l) {
  return l.itemsClone !== null ? (a(), r("div", {
    key: 0,
    class: "checkerComp",
    tabindex: "0",
    onBlur: t[1] || (t[1] = (...n) => l.blur_it && l.blur_it(...n))
  }, [
    o("section", K, [
      o("span", {
        class: y(i.is_open ? "checkerComp_arrowIcon__open" : "checkerComp_arrowIcon__closed"),
        onClick: t[0] || (t[0] = (...n) => l.icon_click && l.icon_click(...n))
      }, null, 2),
      b(o("span", null, h(s.heading), 513), [
        [v, s.heading]
      ])
    ]),
    o("section", Q, [
      o("div", {
        class: "checkerComp_itemsPanel",
        style: d(i.panel_style)
      }, [
        (a(!0), r(p, null, f(l.itemsClone, (n, _) => (a(), r("div", {
          key: _,
          class: y(l.item_class(_)),
          onClick: (c) => l.item_click(_)
        }, h(n.text), 11, X))), 128))
      ], 4)
    ])
  ], 32)) : g("", !0);
}
const ns = /* @__PURE__ */ m(G, [["render", Y]]), Z = {
  name: "CollapseComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    showContent: {
      type: Boolean,
      default: null
    },
    blurPanel: {
      type: Boolean,
      default: !0
    },
    cssVariables: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      show_it: !1,
      drop_panel_height: null,
      drop_panel_width: null,
      content_style: "width: 0; height: 0; transition: all 3s; opacity: 0;"
    };
  },
  computed: {
    is_open: function() {
      return this.toggle_content_state(), this.show_it;
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
    this.drop_panel_height = `${this.$refs.slot.childNodes[0].nextSibling.clientHeight}px`, this.drop_panel_width = `${this.$refs.slot.childNodes[0].nextSibling.clientWidth}px`;
  },
  methods: {
    blur_it: function() {
      this.show_it && this.blurPanel && (this.show_it = !1, this.content_style = "width: 0;height: 0;transition: all 3s; opacity: 0;");
    },
    icon_click: function() {
      this.show_it = !this.show_it;
    },
    toggle_content_state: function() {
      this.show_it || this.showContent ? this.content_style = "width: " + this.drop_panel_width + ";height: " + this.drop_panel_height + ";transition: all 3s; opacity: 1.0;" : this.showContent ? this.content_style = "width: 0;height: 0;transition: all 3s; opacity: 0;" : this.content_style = "width: 0;height: 0;transition: all 3s; opacity: 0;";
    }
  }
}, ee = { class: "collapseComp_headerSec" };
function te(e, t, s, u, i, l) {
  return a(), r("div", {
    class: "collapseComp",
    tabindex: "0",
    onBlur: t[1] || (t[1] = (...n) => l.blur_it && l.blur_it(...n))
  }, [
    o("section", ee, [
      b(o("div", {
        class: y(l.is_open ? "collapseComp_arrowIcon__open" : "collapseComp_arrowIcon__closed"),
        onClick: t[0] || (t[0] = (...n) => l.icon_click && l.icon_click(...n))
      }, null, 2), [
        [v, s.showContent == null]
      ]),
      b(o("span", null, h(s.heading), 513), [
        [v, s.heading]
      ])
    ]),
    o("section", {
      ref: "slot",
      class: "collapseComp_contentSec",
      style: d(i.content_style)
    }, [
      k(e.$slots, "default")
    ], 4)
  ], 32);
}
const os = /* @__PURE__ */ m(Z, [["render", te]]), se = {
  name: "DndComp",
  props: {
    items: {
      type: Array,
      default: () => null
    },
    heading: {
      type: String,
      default: null
    },
    dropPanelHeight: {
      type: String,
      default: "100px"
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    dndCompCancelled: null
  },
  data() {
    return {
      show_it: !1,
      panel_style: "height: 0; transition: all 3s; opacity: 0;"
    };
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    blur_it: function() {
      this.show_it && (this.show_it = !1, this.panel_style = "height: 0;transition: all 3s; opacity: 0;");
    },
    icon_click: function() {
      this.show_it = !this.show_it, this.toggle_panel_state();
    },
    toggle_panel_state: function() {
      this.show_it ? this.panel_style = "height: " + this.dropPanelHeight + ";transition: all 3s; opacity: 1.0;" : this.panel_style = "height: 0;transition: all 3s; opacity: 0;";
    },
    dragstart_handler: function(e) {
      return e.dataTransfer.setData("text/plain", e.target.innerText), e.dataTransfer.dropEffect = "copy", e.dataTransfer.effectAllowed = "copy", !0;
    },
    dragend_handler: function(e) {
      e.dataTransfer.dropEffect === "none" && this.$emit("dndCompCancelled", e.target.innerText);
    }
  }
}, le = { class: "dndComp_headSec" }, ie = {
  key: 0,
  class: "dndComp_itemsSec"
};
function ne(e, t, s, u, i, l) {
  return a(), r("div", {
    class: "dndComp",
    tabindex: "0",
    onBlur: t[3] || (t[3] = (...n) => l.blur_it && l.blur_it(...n))
  }, [
    o("section", le, [
      o("div", {
        class: y(i.show_it ? "dndComp_arrowIcon__open" : "dndComp_arrowIcon__closed"),
        onClick: t[0] || (t[0] = (...n) => l.icon_click && l.icon_click(...n))
      }, null, 2),
      b(o("span", null, h(s.heading), 513), [
        [v, s.heading]
      ])
    ]),
    s.items.length > 0 ? (a(), r("section", ie, [
      o("div", {
        class: "dndComp_itemsPanel",
        style: d(i.panel_style)
      }, [
        (a(!0), r(p, null, f(s.items, (n, _) => (a(), r("div", {
          key: _,
          class: "dndComp_itemBox",
          draggable: "true",
          onDragstart: t[1] || (t[1] = (c) => l.dragstart_handler(c)),
          onDragend: t[2] || (t[2] = (c) => l.dragend_handler(c))
        }, h(n), 33))), 128))
      ], 4)
    ])) : g("", !0)
  ], 32);
}
const as = /* @__PURE__ */ m(se, [["render", ne]]), oe = {
  name: "FadeComp",
  props: {
    direction: {
      type: String,
      default: "vertical"
    },
    out: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      out_height: !1,
      in_height: !1,
      out_left: !1,
      in_left: !1
    };
  },
  computed: {
    compClasses: function() {
      return this.out_height = !1, this.in_height = !1, this.out_left = !1, this.in_left = !1, this.direction === "vertical" && this.out ? this.out_height = !0 : this.direction === "vertical" && !this.out ? this.in_height = !0 : this.direction === "horizontal" && this.out ? this.out_left = !0 : this.direction === "horizontal" && !this.out && (this.in_left = !0), {
        anim_in_height: this.in_height,
        anim_out_height: this.out_height,
        anim_in_left: this.in_left,
        anim_out_left: this.out_left
      };
    }
  }
};
function ae(e, t, s, u, i, l) {
  return a(), r("div", {
    class: y(["fadeComp", l.compClasses])
  }, [
    k(e.$slots, "default")
  ], 2);
}
const rs = /* @__PURE__ */ m(oe, [["render", ae]]), re = {
  name: "FileReadComp",
  props: {
    readLabel: {
      type: String,
      default: null
    },
    readFile: {
      type: Boolean,
      default: !1
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    fileReadCompFilenameChanged: null,
    fileReadCompContentChanged: null
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    value_changed: function(e) {
      const t = e.target.files[0];
      if (this.$emit("fileReadCompFilenameChanged", t.name), this.readFile) {
        const s = new FileReader();
        s.onload = (u) => {
          this.$emit("fileReadCompContentChanged", u.target.result);
        }, s.readAsText(t);
      }
    }
  }
}, ce = { class: "fileReadComp" }, ue = { class: "fileReadComp_label" };
function _e(e, t, s, u, i, l) {
  return a(), r("div", ce, [
    o("label", ue, [
      x(h(s.readLabel) + " ", 1),
      o("input", {
        class: "fileReadComp_input",
        type: "file",
        onChange: t[0] || (t[0] = (n) => l.value_changed(n))
      }, null, 32)
    ])
  ]);
}
const cs = /* @__PURE__ */ m(re, [["render", _e], ["__scopeId", "data-v-83959162"]]), he = {
  name: "InfiniteScrollerComp",
  props: {
    cssVariables: {
      type: Object,
      default: null
    }
  },
  emits: {
    reachedBottom: null
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    check_bottom(e) {
      const t = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      t && this.$emit("reachedBottom", t);
    }
  }
};
function de(e, t, s, u, i, l) {
  return a(), r("div", {
    class: "scrollerComp",
    onScroll: t[0] || (t[0] = (n) => l.check_bottom(n))
  }, [
    k(e.$slots, "default", {}, () => [
      x(" Default Content ")
    ])
  ], 32);
}
const us = /* @__PURE__ */ m(he, [["render", de]]), me = {
  name: "InputComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    inputValue: {
      default: null
    },
    inputChecked: {
      type: Boolean,
      default: !1
    },
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Enter a value"
    },
    inputSize: {
      type: String,
      default: "40"
    },
    headerPosition: {
      type: String,
      default: "left"
    },
    singleBorder: {
      type: Boolean,
      default: !1
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    inputCompValueChanged: null
  },
  data() {
    return {
      currentValue: this.inputValue
    };
  },
  computed: {
    header_style: function() {
      let e = null;
      return this.headerPosition === "left" ? e = "margin-right: 5px;" : this.headerPosition === "below" && (e = "margin-top: 2px;"), e;
    },
    input_box_style: function() {
      let e = null;
      return this.singleBorder ? e = "border: none; border-bottom: 1px solid;" : e = "border: 1px solid;", this.inputType === "number" && (e = `${e}width: ${this.inputSize}px;`), e;
    }
  },
  watch: {
    inputValue(e) {
      this.currentValue = e;
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    valueChanged: function() {
      this.$emit("inputCompValueChanged", this.currentValue);
    },
    compute_container_class: function() {
      if (this.headerPosition === "left")
        return "inputComp_containerBox__left";
      if (this.headerPosition === "above")
        return "inputComp_containerBox__top";
      if (this.headerPosition === "below")
        return "inputComp_containerBox__below";
    }
  }
}, pe = { class: "inputComp" }, fe = ["size", "type", "placeholder", "checked"];
function ye(e, t, s, u, i, l) {
  return a(), r("div", pe, [
    o("div", {
      class: y(l.compute_container_class())
    }, [
      b(o("div", {
        class: "inputComp_headerBox",
        style: d(l.header_style)
      }, h(s.heading), 5), [
        [v, s.heading]
      ]),
      b(o("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (n) => i.currentValue = n),
        class: "inputComp_input",
        size: s.inputSize,
        type: s.inputType,
        style: d(l.input_box_style),
        placeholder: s.placeholder,
        checked: s.inputChecked,
        onChange: t[1] || (t[1] = (...n) => l.valueChanged && l.valueChanged(...n))
      }, null, 44, fe), [
        [P, i.currentValue]
      ])
    ], 2)
  ]);
}
const _s = /* @__PURE__ */ m(me, [["render", ye], ["__scopeId", "data-v-a6bccd1a"]]), ge = {
  name: "IosMenuComp",
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      is_open: !1,
      menu_style: "width: 0; transition: all 3s; opacity: 0;"
    };
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    trigger_menu: function() {
      this.is_open ? (this.is_open = !1, this.menu_style = "width: 0; transition: all 3s; opacity: 0;") : (this.is_open = !0, this.menu_style = "width: 100%; transition: all 3s; opacity: 1.0;");
    }
  }
}, Ce = { class: "iosMenuComp" }, be = /* @__PURE__ */ o("div", { class: "iosMenuComp_triggerIcon" }, null, -1), ve = [
  be
], ke = { class: "iosMenuComp_iosSec" }, we = { class: "iosMenuComp_list" }, xe = {
  key: 0,
  class: "iosMenuComp_itemHeading"
}, $e = { class: "iosMenuComp_itemBox" }, Ve = ["innerHTML"];
function Se(e, t, s, u, i, l) {
  const n = S("router-link"), _ = S("router-view");
  return a(), r("div", Ce, [
    o("section", {
      class: "iosMenuComp_triggerSec",
      onClick: t[0] || (t[0] = (...c) => l.trigger_menu && l.trigger_menu(...c))
    }, ve),
    o("section", ke, [
      o("ul", we, [
        o("div", {
          class: "iosMenuComp_listSec",
          style: d(i.menu_style)
        }, [
          (a(!0), r(p, null, f(s.routes, (c, C) => (a(), r("li", {
            key: C,
            class: "iosMenuComp_itemParent"
          }, [
            o("div", {
              class: y({ iosMenuComp_itemBar: c.heading })
            }, null, 2),
            c.heading ? (a(), r("div", xe, h(c.heading), 1)) : g("", !0),
            o("div", $e, [
              c.icon ? (a(), r("span", {
                key: 0,
                class: "iosMenuComp_itemIcon",
                innerHTML: c.icon
              }, null, 8, Ve)) : g("", !0),
              o("span", null, [
                w(n, {
                  to: c.path
                }, {
                  default: T(() => [
                    x(h(c.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ])
            ])
          ]))), 128))
        ], 4)
      ]),
      w(_, { class: "iosMenuComp_itemView" })
    ])
  ]);
}
const hs = /* @__PURE__ */ m(ge, [["render", Se]]), Te = {
  name: "JsonTreeComp",
  props: {
    jsonObj: {
      default: null,
      type: Object
    },
    title: {
      type: String,
      default: null
    },
    indent: {
      type: Number,
      default: 16
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      content_ele: null
    };
  },
  watch: {
    jsonObj: function() {
      this.jsonObj !== null && this.render_elements(this.content_ele, this.jsonObj, this.indent);
    }
  },
  mounted() {
    const e = this.$refs.divslot.children[0];
    e.className = "jsontreeComp";
    const t = document.createElement("div");
    if (t.innerHTML = this.title, t.className = "jsontreeComp_titleBox", e.appendChild(t), this.content_ele = document.createElement("div"), this.content_ele.className = "jsontreeComp_contentBox", e.appendChild(this.content_ele), this.cssVariables !== null)
      for (let s of Object.keys(this.cssVariables))
        this.$el.parentElement.style.setProperty(`--${s}`, this.cssVariables[s]);
  },
  methods: {
    render_elements: function(e, t, s) {
      for (const u in t)
        if (t[u] instanceof Object && !(t[u] instanceof Array)) {
          const i = document.createElement("div");
          i.className = "jsontreeComp_icon__closed", i.style = `margin-left: ${s}px;`, i.innerHTML = ` ${u}: {`, i.onclick = this.click_handler, e.appendChild(i);
          const l = document.createElement("div");
          l.className = "jsontreeComp_box__hideit", i.appendChild(l), this.render_elements(l, t[u], s + this.indent);
          const n = document.createElement("div");
          n.style = `margin-left: ${s}px;`, n.innerHTML = "}", e.appendChild(n);
        } else if (t[u] instanceof Array) {
          const i = document.createElement("div");
          i.className = "jsontreeComp_icon__closed", i.style = `margin-left: ${s}px;`, i.innerHTML = ` ${u}: [`, i.onclick = this.click_handler, e.appendChild(i);
          const l = document.createElement("div");
          l.className = "jsontreeComp_box__hideit", i.appendChild(l), this.render_elements(l, t[u], s + this.indent);
          const n = document.createElement("div");
          n.style = `margin-left: ${s}px;`, n.innerHTML = "]", e.appendChild(n);
        } else {
          const i = document.createElement("div");
          i.style = `margin-left: ${s}px;`, i.innerHTML = `${u}: ${t[u]}`, e.appendChild(i);
        }
    },
    click_handler: function(e) {
      e.stopPropagation(), e.preventDefault(), e.currentTarget.classList.contains("jsontreeComp_icon__closed") ? (e.currentTarget.classList.remove("jsontreeComp_icon__closed"), e.currentTarget.classList.add("jsontreeComp_icon__open")) : (e.currentTarget.classList.remove("jsontreeComp_icon__open"), e.currentTarget.classList.add("jsontreeComp_icon__closed")), e.currentTarget.childNodes[1].classList.contains("jsontreeComp_box__hideit") ? e.currentTarget.childNodes[1].classList.remove("jsontreeComp_box__hideit") : e.currentTarget.childNodes[1].classList.add("jsontreeComp_box__hideit");
    }
  }
}, Be = { ref: "divslot" };
function Oe(e, t, s, u, i, l) {
  return a(), r("div", null, [
    o("div", Be, [
      k(e.$slots, "default")
    ], 512)
  ]);
}
const ds = /* @__PURE__ */ m(Te, [["render", Oe]]), je = {
  name: "LabelComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    value: {
      default: null
    },
    headerPosition: {
      type: String,
      default: "left"
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    labelCompValueChanged: null
  },
  computed: {
    computed_value: function() {
      return this.$emit("labelCompValueChanged", this.value), this.value !== null ? this.value.toString() : "";
    },
    container_style: function() {
      return this.headerPosition === "below" ? "display: flex; flex-direction: column-reverse;" : this.headerPosition === "above" ? "display: flex; flex-direction: column;" : "display: flex; flex-direction: row;";
    },
    header_style: function() {
      return this.headerPosition === "left" ? "margin-right: 5px;" : "";
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  }
}, Pe = { class: "labelComp" }, Le = { class: "labelComp_valueBox" };
function Ie(e, t, s, u, i, l) {
  return a(), r("div", Pe, [
    o("div", {
      style: d(l.container_style)
    }, [
      s.heading ? (a(), r("div", {
        key: 0,
        class: "labelComp_headerBox",
        style: d(l.header_style)
      }, h(s.heading), 5)) : g("", !0),
      o("div", Le, h(l.computed_value), 1)
    ], 4)
  ]);
}
const ms = /* @__PURE__ */ m(je, [["render", Ie]]), Ne = {
  name: "MultiTableComp",
  props: {
    title: {
      type: String,
      default: null
    },
    headings: {
      type: Array,
      required: !0,
      default: () => null
    },
    columnWidths: {
      type: Array,
      default: () => null
    },
    treeLine: {
      type: String,
      default: "black"
    },
    tables: {
      type: Object,
      default: null
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    multiTableCompCell: null
  },
  data() {
    return {
      tree_line_classes: null
    };
  },
  computed: {
    column_styles: function() {
      let e = [];
      if (this.headings !== null) {
        const t = this.headings.length;
        e = new Array(t);
        for (let s = 0; s < t; s++) {
          let u = null;
          this.columnWidths === null || this.columnWidths[s] === null ? u = "width: 7.5rem" : u = `width:${this.columnWidths[s]}px;`, e[s] = u;
        }
      }
      return e;
    }
  },
  mounted() {
    if (this.treeLine === "black" ? this.tree_line_classes = ["multiTableComp_tbodyTd__startTreeSolidBlack", "multiTableComp_tbodyTd__endTreeSolidBlack"] : this.treeLine === "white" ? this.tree_line_classes = ["multiTableComp_tbodyTd__startTreeSolidWhite", "multiTableComp_tbodyTd__endTreeSolidWhite"] : this.treeLine === "dotted" ? this.tree_line_classes = ["multiTableComp_tbodyTd__startTreeDottedBlack", "multiTableComp_tbodyTd__endTreeDottedBlack"] : this.tree_line_classes = ["multiTableComp_tbodyTd__startTreeSolidBlack", "multiTableComp_tbodyTd__endTreeSolidBlack"], this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    compute_td_class: function(e, t, s) {
      return this.tree_line_classes !== null && t === 0 ? e < s - 1 ? this.tree_line_classes[0] : this.tree_line_classes[1] : "";
    },
    key_clicked: function(e) {
      e.open = !e.open;
    },
    cell_clicked: function(e, t, s) {
      this.$emit("multiTableCompCell", { table_key: e, data_row_idx: t, data_col_idx: s });
    }
  }
}, Ee = { class: "multiTableComp" }, Me = { class: "multiTableComp_title" }, Ae = { class: "multiTableComp_table" }, We = { class: "multiTableComp_tbody" }, He = ["onClick"], ze = ["onClick"];
function Re(e, t, s, u, i, l) {
  return a(), r("div", Ee, [
    o("div", Me, h(s.title), 1),
    o("table", Ae, [
      o("thead", null, [
        o("tr", null, [
          (a(!0), r(p, null, f(s.headings, (n, _) => (a(), r("th", {
            key: _,
            class: "multiTableComp_theadTh",
            style: d(l.column_styles[_])
          }, h(n), 5))), 128))
        ])
      ]),
      o("tbody", We, [
        (a(!0), r(p, null, f(s.tables, (n, _) => (a(), r(p, { key: _ }, [
          o("tr", null, [
            o("td", {
              colspan: "headings.length",
              onClick: (c) => l.key_clicked(n)
            }, [
              o("span", {
                class: y(n.open ? "multiTableComp_arrowIcon__open" : "multiTableComp_arrowIcon__closed")
              }, h(_), 3)
            ], 8, He)
          ]),
          w(j, { name: "fade" }, {
            default: T(() => [
              (a(!0), r(p, null, f(n.data, (c, C) => b((a(), r("tr", { key: C }, [
                (a(!0), r(p, null, f(c, ($, V) => (a(), r("td", {
                  key: V,
                  style: d(l.column_styles[V]),
                  class: y(l.compute_td_class(C, V, n.data.length)),
                  onClick: (ts) => l.cell_clicked(_, C, V)
                }, h($), 15, ze))), 128))
              ])), [
                [v, n.open]
              ])), 128))
            ]),
            _: 2
          }, 1024)
        ], 64))), 128))
      ])
    ])
  ]);
}
const ps = /* @__PURE__ */ m(Ne, [["render", Re]]);
let O = function(e) {
  let t = 0;
  for (let s = 0; s < e.length; s++)
    t += 180;
  return t;
};
const De = {
  name: "NavImageComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    sources: {
      type: Array,
      default: null
    },
    containerWidth: {
      type: Number,
      default: 900
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    navImageCompCurrentSource: null
  },
  data() {
    return {
      current_source: null,
      current_thumbnail_img: null,
      navImageComp_style: null,
      thumbnails_div_style: null,
      preview_img_style: null
    };
  },
  watch: {
    sources: function(e, t) {
      let s = O(t);
      this.navImageComp_style = `width: ${this.containerWidth}px;`, this.thumbnails_div_style = `width: ${s}px;`, this.preview_img_style = `width: ${this.containerWidth * 0.9}px; height: ${this.containerWidth * 0.75}px`;
    }
  },
  mounted() {
    if (this.sources !== null) {
      let e = O(this.sources);
      this.navImageComp_style = `width: ${this.containerWidth}px;`, this.thumbnails_div_style = `width: ${e}px;`, this.preview_img_style = `width: ${this.containerWidth * 0.9}px; height: ${this.containerWidth * 0.75}px`;
    }
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    thumbnail_image_hover: function(e) {
      this.current_source = e.currentTarget.currentSrc, this.current_thumbnail_img !== null && (this.current_thumbnail_img.classList.remove("navImageComp_thumbnail__selected"), this.current_thumbnail_img.classList.add("navImageComp_thumbnail__notselected")), e.currentTarget.classList.remove("navImageComp_thumbnail__notselected"), e.currentTarget.classList.add("navImageComp_thumbnail__selected"), this.current_thumbnail_img = e.currentTarget, this.$emit("navImageCompCurrentSource", this.current_source);
    }
  }
}, Je = { class: "navImageComp_thumbnailsPanel" }, Fe = ["src"], Ue = { class: "navImageComp_preview" }, qe = ["src"];
function Ge(e, t, s, u, i, l) {
  return a(), r("div", {
    class: "navImageComp",
    style: d(i.navImageComp_style)
  }, [
    b(o("div", { class: "navImageComp_headerBox" }, h(s.heading), 513), [
      [v, s.heading]
    ]),
    o("div", Je, [
      o("div", {
        class: "navImageComp_thumbnailsDiv",
        style: d(i.thumbnails_div_style)
      }, [
        (a(!0), r(p, null, f(s.sources, (n, _) => (a(), r("img", {
          key: _,
          class: "navImageComp_thumbnail__notselected",
          src: n,
          alt: "",
          onMouseover: t[0] || (t[0] = (c) => l.thumbnail_image_hover(c))
        }, null, 40, Fe))), 128))
      ], 4)
    ]),
    o("div", Ue, [
      o("img", {
        class: "navImageComp_preview_img",
        src: i.current_source,
        style: d(i.preview_img_style),
        alt: ""
      }, null, 12, qe)
    ])
  ], 4);
}
const fs = /* @__PURE__ */ m(De, [["render", Ge]]), Ke = {
  name: "ProgressComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    percent: {
      type: Number,
      default: null
    },
    layout: {
      type: String,
      default: "left"
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    compute_percent: function() {
      let e = "0";
      return this.percent !== null && (e = `${this.percent}%`), e;
    },
    compute_bar_style: function() {
      let e = "width: 0";
      return this.percent !== null && (e = `width: ${this.percent}%;`), e;
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    compute_container_class: function() {
      if (this.layout === "left")
        return "progressComp_headerBox__left";
      if (this.layout === "top")
        return "progressComp_headerBox__top";
      if (this.layout === "below")
        return "progressComp_headerBox__below";
    }
  }
}, Qe = { class: "progressComp" }, Xe = { class: "progressComp_trackBox" }, Ye = { class: "progressComp_percentBox" };
function Ze(e, t, s, u, i, l) {
  return a(), r("div", Qe, [
    o("div", {
      class: y(l.compute_container_class())
    }, [
      b(o("div", { class: "progressComp_headerBox" }, h(s.heading), 513), [
        [v, s.heading]
      ]),
      o("div", Xe, [
        o("div", {
          class: "progressComp_barBox",
          style: d(l.compute_bar_style)
        }, null, 4)
      ])
    ], 2),
    o("div", Ye, h(l.compute_percent), 1)
  ]);
}
const ys = /* @__PURE__ */ m(Ke, [["render", Ze]]), et = {
  name: "RangeComp",
  props: {
    heading: {
      type: String,
      default: null
    },
    rangeValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    headerPosition: {
      type: String,
      default: "left"
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    rangeCompValueChanged: null
  },
  data() {
    return {
      currentValue: this.rangeValue,
      rangeClass: "rangeComp_headerBox__left",
      valueBoxMargin: { margin: "0 0 0 4px" }
    };
  },
  watch: {
    rangeValue(e) {
      this.currentValue = e;
    }
  },
  mounted() {
    if (this.headerPosition === "left" ? (this.valueBoxMargin = { margin: "2px 0 0 4px" }, this.rangeClass = "rangeComp_headerBox__left") : this.headerPosition === "above" ? (this.valueBoxMargin = { margin: "20px 0 0 4px" }, this.rangeClass = "rangeComp_headerBox__above") : this.headerPosition === "below" && (this.valueBoxMargin = { margin: "-4px 0 0 4px" }, this.rangeClass = "rangeComp_headerBox__below"), this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    valueChanged: function() {
      this.$emit("rangeCompValueChanged", this.currentValue);
    }
  }
}, tt = { class: "rangeComp" }, st = ["min", "max", "step"];
function lt(e, t, s, u, i, l) {
  return a(), r("div", tt, [
    o("div", {
      class: y(i.rangeClass)
    }, [
      b(o("div", { class: "rangeComp_headerBox" }, h(s.heading), 513), [
        [v, s.heading]
      ]),
      b(o("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (n) => i.currentValue = n),
        class: "rangeComp_input",
        type: "range",
        min: s.min,
        max: s.max,
        step: s.step,
        onChange: t[1] || (t[1] = (...n) => l.valueChanged && l.valueChanged(...n))
      }, null, 40, st), [
        [B, i.currentValue]
      ])
    ], 2),
    o("div", {
      class: "rangeComp_valueBox",
      style: d(i.valueBoxMargin)
    }, h(i.currentValue), 5)
  ]);
}
const gs = /* @__PURE__ */ m(et, [["render", lt]]), it = {
  name: "SelectComp",
  props: {
    items: {
      type: Array,
      default: null
    },
    selectValue: {
      type: String,
      default: null
    },
    heading: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: () => null
    },
    dropPanelHeight: {
      type: String,
      default: "6.5rem"
    },
    blurPanel: {
      type: Boolean,
      default: !0
    },
    singleBorder: {
      type: Boolean,
      default: !1
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    selectCompValueChanged: null
  },
  data() {
    return {
      current_value: null,
      is_open: !1,
      panel_style: "max-width: 0;max-height: 0; transition: all 3s; opacity: 0;",
      select_box_class: "selectComp_selectBoxSec"
    };
  },
  watch: {
    selectValue: function() {
      this.current_value !== this.selectValue && (this.selectValue === null && this.placeholder !== null ? (this.current_value = this.placeholder, this.$emit("selectCompValueChanged", null)) : this.items !== null && this.items.indexOf(this.selectValue) !== -1 && (this.current_value = this.selectValue, this.$emit("selectCompValueChanged", this.current_value)));
    }
  },
  mounted() {
    if (this.selectValue === null && this.placeholder !== null ? this.current_value = this.placeholder : this.items !== null && this.items.indexOf(this.selectValue) !== -1 && (this.current_value = this.selectValue), this.singleBorder && (this.select_box_class = "selectComp_selectBoxSecBottomBorder"), this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    blur_it: function() {
      this.is_open && this.blurPanel && (this.is_open = !1, this.panel_style = "max-width: 0;max-height: 0;transition: all 3s; opacity: 0;");
    },
    arrow_click: function() {
      this.toggle_panel_state();
    },
    item_click: function(e) {
      this.current_value = e, this.$emit("selectCompValueChanged", e), this.toggle_panel_state();
    },
    toggle_panel_state: function() {
      this.is_open ? (this.is_open = !1, this.panel_style = "max-width: 0;max-height: 0;transition: all 3s; opacity: 0;") : (this.is_open = !0, this.panel_style = "max-width: 100%;max-height: " + this.dropPanelHeight + "; transition: all 3s; opacity: 1.0;");
    }
  }
}, nt = {
  key: 0,
  class: "selectComp_headingBox"
}, ot = { class: "selectComp_selectBox" }, at = { class: "selectComp_itemsSec" }, rt = ["onClick"];
function ct(e, t, s, u, i, l) {
  return a(), r("div", null, [
    o("div", {
      class: "selectComp",
      tabindex: "0",
      onBlur: t[1] || (t[1] = (...n) => l.blur_it && l.blur_it(...n))
    }, [
      s.heading ? (a(), r("div", nt, h(s.heading), 1)) : g("", !0),
      o("section", {
        class: y(i.select_box_class)
      }, [
        o("div", {
          class: y(i.is_open ? "selectComp_arrowIcon__open" : "selectComp_arrowIcon__closed"),
          onClick: t[0] || (t[0] = (...n) => l.arrow_click && l.arrow_click(...n))
        }, null, 2),
        o("div", ot, h(i.current_value), 1)
      ], 2),
      b(o("section", at, [
        o("div", {
          class: "selectComp_itemsPanel",
          style: d(i.panel_style)
        }, [
          (a(!0), r(p, null, f(s.items, (n, _) => (a(), r("div", {
            key: _,
            class: "selectComp_itemBox",
            onClick: (c) => l.item_click(n)
          }, h(n), 9, rt))), 128))
        ], 4)
      ], 512), [
        [v, s.items]
      ])
    ], 32)
  ]);
}
const Cs = /* @__PURE__ */ m(it, [["render", ct]]), ut = {
  name: "SelectEditComp",
  props: {
    items: {
      type: Array,
      default: null
    },
    selectValue: {
      type: String,
      default: null
    },
    inputSize: {
      type: String,
      default: "20"
    },
    heading: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: "Select a value"
    },
    showTrash: {
      type: Boolean,
      default: !0
    },
    dropPanelHeight: {
      type: String,
      default: "6.5rem"
    },
    blurPanel: {
      type: Boolean,
      default: !0
    },
    singleBorder: {
      type: Boolean,
      default: !1
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  emits: {
    selectEditCompValueChanged: null,
    selectEditCompItemsChanged: null
  },
  data() {
    return {
      current_value: this.selectValue,
      is_open: !1,
      panel_style: "max-width: 0; max-height: 0; transition: all 3s; opacity: 0;",
      select_box_class: "selectEditComp_selectBoxSec"
    };
  },
  computed: {
    items_clone: function() {
      const e = JSON.parse(JSON.stringify(this.items));
      return this.$emit("selectEditCompItemsChanged", e), e;
    }
  },
  watch: {
    selectValue: function() {
      this.current_value !== this.selectValue && (this.selectValue === null && this.placeholder !== null ? (this.current_value = null, this.$emit("selectEditCompValueChanged", null)) : this.items_clone.indexOf(this.selectValue) !== -1 && (this.current_value = this.selectValue, this.$emit("selectEditCompValueChanged", this.current_value)));
    }
  },
  mounted() {
    if (this.singleBorder && (this.select_box_class = "selectEditComp_selectBoxSecBottomBorder"), this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    blur_it: function() {
      this.is_open && this.blurPanel && (this.is_open = !1, this.panel_style = "max-width: 0;max-height: 0;transition: all 3s; opacity: 0;");
    },
    value_changed: function(e) {
      e.currentTarget.value !== null && this.items_clone.push(e.currentTarget.value), this.current_value = e.currentTarget.value, this.$emit("selectEditCompValueChanged", e.currentTarget.value), this.$emit("selectEditCompItemsChanged", this.items_clone);
    },
    trash_item: function() {
      if (this.current_value !== null) {
        const e = this.items_clone.indexOf(this.current_value);
        e !== -1 && (this.items_clone.splice(e, 1), this.current_value = null, this.$emit("selectEditCompValueChanged", null), this.$emit("selectEditCompItemsChanged", this.items_clone));
      }
    },
    arrow_click: function() {
      this.toggle_panel_state();
    },
    item_click: function(e) {
      this.current_value = e, this.$emit("selectEditCompValueChanged", e), this.toggle_panel_state();
    },
    toggle_panel_state: function() {
      this.is_open ? (this.is_open = !1, this.panel_style = "max-width: 0; max-height: 0; transition: all 3s; opacity: 0;") : (this.is_open = !0, this.panel_style = "max-width: 100%; max-height:" + this.dropPanelHeight + "; transition: all 3s; opacity: 1.0;");
    }
  }
}, _t = {
  key: 0,
  class: "selectEditComp_headingBox"
}, ht = ["size", "placeholder", "value"], dt = { class: "selectEditComp_itemsSec" }, mt = ["onClick"];
function pt(e, t, s, u, i, l) {
  return a(), r("div", {
    class: "selectEditComp",
    tabindex: "0",
    onBlur: t[3] || (t[3] = (...n) => l.blur_it && l.blur_it(...n))
  }, [
    s.heading ? (a(), r("div", _t, h(s.heading), 1)) : g("", !0),
    o("section", {
      class: y(i.select_box_class)
    }, [
      o("div", {
        class: y(i.is_open ? "selectEditComp_arrowIcon__open" : "selectEditComp_arrowIcon__closed"),
        onClick: t[0] || (t[0] = (...n) => l.arrow_click && l.arrow_click(...n))
      }, null, 2),
      o("input", {
        class: "selectEditComp_inputBox",
        size: s.inputSize,
        placeholder: s.placeholder,
        value: i.current_value,
        onChange: t[1] || (t[1] = (n) => l.value_changed(n))
      }, null, 40, ht),
      s.showTrash ? (a(), r("div", {
        key: 0,
        class: "selectEditComp_trashIcon",
        onClick: t[2] || (t[2] = (...n) => l.trash_item && l.trash_item(...n))
      })) : g("", !0)
    ], 2),
    b(o("section", dt, [
      o("div", {
        class: "selectEditComp_itemsPanel",
        style: d(i.panel_style)
      }, [
        (a(!0), r(p, null, f(l.items_clone, (n, _) => (a(), r("div", {
          key: _,
          class: "selectEditComp_itemBox",
          onClick: (c) => l.item_click(n)
        }, h(n), 9, mt))), 128))
      ], 4)
    ], 512), [
      [v, l.items_clone]
    ])
  ], 32);
}
const bs = /* @__PURE__ */ m(ut, [["render", pt]]), ft = {
  name: "SliderComp",
  props: {
    images: {
      type: Array,
      default: null
    },
    delay: {
      type: Number,
      default: 4e3
    },
    startNumber: {
      type: Number,
      default: null
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      started: !1,
      current_number: 0,
      timer: null
    };
  },
  computed: {
    get_caption: function() {
      return this.images[this.current_number].caption;
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    get_src: function() {
      return this.startNumber !== null && !this.started && (this.startNumber > 0 && this.startNumber <= this.images.length && (this.current_number = this.startNumber - 1), this.started = !0), this.images[this.current_number].src;
    },
    start_rotation: function() {
      this.timer = setInterval(this.next, this.delay);
    },
    stop_rotation: function() {
      clearTimeout(this.timer), this.timer = null;
    },
    next: function() {
      const e = this.current_number += 1;
      this.current_number = e % this.images.length;
    },
    prev: function() {
      const e = Math.abs(this.current_number -= 1);
      this.current_number = e % this.images.length;
    },
    anchor_clicked: function(e) {
      this.stop_rotation();
      const t = Math.abs(this.current_number += e);
      this.current_number = t % this.images.length;
    }
  }
}, yt = {
  key: 0,
  class: "sliderComp"
}, gt = { class: "sliderComp_controlSec" }, Ct = /* @__PURE__ */ o("span", null, "||", -1), bt = /* @__PURE__ */ o("span", null, "||", -1), vt = /* @__PURE__ */ o("span", null, "||", -1), kt = ["src"], wt = { class: "sliderComp_captionSec" };
function xt(e, t, s, u, i, l) {
  return a(), r("div", null, [
    s.images !== null ? (a(), r("div", yt, [
      o("section", gt, [
        o("a", {
          class: "sliderComp_a",
          onClick: t[0] || (t[0] = (n) => l.anchor_clicked(-1))
        }, "Previous"),
        Ct,
        o("a", {
          class: "sliderComp_a",
          onClick: t[1] || (t[1] = (n) => l.anchor_clicked(1))
        }, "Next"),
        bt,
        o("a", {
          class: "sliderComp_a",
          onClick: t[2] || (t[2] = (...n) => l.start_rotation && l.start_rotation(...n))
        }, "Start Rotation"),
        vt,
        o("a", {
          class: "sliderComp_a",
          onClick: t[3] || (t[3] = (...n) => l.stop_rotation && l.stop_rotation(...n))
        }, "Stop Rotation")
      ]),
      w(j, { name: "sliderComp_slide" }, {
        default: T(() => [
          (a(!0), r(p, null, f(s.images, (n, _) => (a(), r("div", { key: _ }, [
            _ === i.current_number ? (a(), r("img", {
              key: 0,
              class: "sliderComp_img",
              src: l.get_src(),
              alt: ""
            }, null, 8, kt)) : g("", !0)
          ]))), 128))
        ]),
        _: 1
      }),
      o("section", wt, h(l.get_caption), 1)
    ])) : g("", !0)
  ]);
}
const vs = /* @__PURE__ */ m(ft, [["render", xt]]), $t = {
  name: "TabComp",
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      subtab_routes: [],
      current_main_route: null
    };
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    main_mouseover: function(e) {
      this.current_main_route = e.path, e.children !== void 0 ? this.subtab_routes = e.children : this.subtab_routes = [];
    },
    sub_clicked: function(e) {
      this.$router.push(`${this.current_main_route}/${e.path}`);
    }
  }
}, Vt = { class: "tabComp" }, St = { class: "tabComp_header" }, Tt = { class: "tabComp_mainNavSec" }, Bt = ["onMouseover"], Ot = { class: "tabComp_subNavSec" }, jt = ["onClick"], Pt = { key: 0 }, Lt = { class: "tabComp_footer" };
function It(e, t, s, u, i, l) {
  const n = S("router-link"), _ = S("router-view");
  return a(), r("div", Vt, [
    o("header", St, [
      k(e.$slots, "default")
    ]),
    o("section", Tt, [
      (a(!0), r(p, null, f(s.routes, (c, C) => (a(), r("span", {
        key: C,
        class: "tabComp_tabBox",
        onMouseover: ($) => l.main_mouseover(c)
      }, [
        w(n, {
          to: c.path
        }, {
          default: T(() => [
            x(h(c.name), 1)
          ]),
          _: 2
        }, 1032, ["to"])
      ], 40, Bt))), 128))
    ]),
    o("section", Ot, [
      (a(!0), r(p, null, f(i.subtab_routes, (c, C) => (a(), r("div", {
        key: C,
        class: "tabComp_tabBox",
        onClick: ($) => l.sub_clicked(c)
      }, [
        i.subtab_routes.length > 0 ? (a(), r("div", Pt, h(c.name), 1)) : g("", !0)
      ], 8, jt))), 128))
    ]),
    w(_),
    o("footer", Lt, [
      k(e.$slots, "footer")
    ])
  ]);
}
const ks = /* @__PURE__ */ m($t, [["render", It]]), Nt = {
  name: "TableComp",
  props: {
    rows: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    tableHeight: {
      type: Number,
      default: 300
    },
    headings: {
      type: Array,
      default: null
    },
    columnWidths: {
      type: Array,
      default: null
    },
    cellClass: {
      type: Object,
      default: null
    },
    cssVariables: {
      type: Object,
      default: null
    }
  },
  emits: {
    tableCompRow: null,
    tableCompCell: null,
    tableCompSort: null
  },
  data() {
    return {
      rows_clone: null,
      selected_tr: null,
      sort_col_idx: 0,
      sort_descending: !1,
      class_names: null
    };
  },
  computed: {
    n_cols: function() {
      return Object.keys(this.rows[0]).length;
    },
    n_rows: function() {
      return this.rows.length;
    },
    table_width_style: function() {
      let e = "";
      if (this.columnWidths === null)
        e = `width:${120 * this.n_cols}px;`;
      else {
        let t = 0;
        for (let s = 0; s < this.n_cols; s++)
          this.columnWidths[s] === null ? t += 120 : t += this.columnWidths[s];
        e = `width:${t + 8}px;`;
      }
      return e;
    },
    head_styles: function() {
      return this.row_style();
    },
    td_styles: function() {
      const e = this.row_style(), t = [];
      for (let s = 0; s < this.n_rows; s++)
        t.push(e);
      return t;
    },
    tbody_style: function() {
      return `height: ${this.tableHeight}px;`;
    }
  },
  watch: {
    rows: function(e) {
      e !== null && (this.rows_clone = JSON.parse(JSON.stringify(e)), this.class_names = new Array(e.length), e.forEach((t, s) => {
        const u = Object.keys(t), i = new Array(u.length);
        u.forEach((l, n) => {
          i[n] = "";
        }), this.class_names[s] = i;
      }));
    },
    cellClass: function(e) {
      if (this.cellClass !== null) {
        const t = e.row, s = e.col;
        this.class_names[t][s] = e.name;
      }
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    row_style: function() {
      let e = [];
      if (this.columnWidths === null)
        for (let t = 0; t < this.n_cols; t++)
          e.push("width:120px");
      else
        for (let t = 0; t < this.n_cols; t++)
          this.columnWidths[t] === null ? e.push("width:120px") : e.push(`width:${this.columnWidths[t]}px`);
      return e;
    },
    sort_column: function(e) {
      const s = Object.keys(this.rows[0])[e], u = JSON.parse(JSON.stringify(this.rows));
      u.sort((l, n) => {
        let _ = l[s], c = n[s];
        return typeof _ == "string" && (_ = _.toLowerCase()), typeof c == "string" && (c = c.toLowerCase()), this.sort_descending ? _ < c ? 1 : _ > c ? -1 : 0 : _ < c ? -1 : _ > c ? 1 : 0;
      }), this.rows_clone = u;
      const i = {
        column: s,
        index: e,
        descending: this.sort_descending
      };
      this.$emit("tableCompSort", i), e === this.sort_col_idx ? this.sort_descending = !this.sort_descending : this.sort_col_idx = e;
    },
    //child to parent -- send selected row
    row_clicked: function(e, t) {
      const s = [], u = this.rows_clone[t];
      for (let i of Object.keys(u))
        s.push(u[i]);
      this.selected_tr && (this.selected_tr.classList.remove("tableComp_tr__selected"), this.selected_tr.classList.add("tableComp_tr__notselected")), e.currentTarget.classList.remove("tableComp_tr__notselected"), e.currentTarget.classList.add("tableComp_tr__selected"), this.selected_tr = e.currentTarget, this.$emit(
        "tableCompRow",
        {
          row_index: t,
          row_values: s
        }
      );
    },
    //child to parent -- send selected cell
    cell_clicked: function(e, t) {
      const s = Object.keys(this.rows_clone[e])[t], u = {
        row_index: e,
        col_index: t,
        cell_value: this.rows_clone[e][s],
        cell_class: this.class_names[e][t]
      };
      this.$emit("tableCompCell", u);
    }
  }
}, Et = {
  key: 0,
  class: "tableComp_title"
}, Mt = {
  key: 1,
  class: "tableComp_subtitle"
}, At = { class: "tableComp_table" }, Wt = {
  key: 0,
  class: "tableComp_thead"
}, Ht = ["onClick"], zt = ["onClick"], Rt = ["onClick"];
function Dt(e, t, s, u, i, l) {
  return a(), r("div", null, [
    i.rows_clone !== null ? (a(), r("div", {
      key: 0,
      class: "tableComp",
      style: d(l.table_width_style)
    }, [
      s.title !== null ? (a(), r("div", Et, h(s.title), 1)) : g("", !0),
      s.subTitle !== null ? (a(), r("div", Mt, h(s.subTitle), 1)) : g("", !0),
      o("table", At, [
        s.headings !== null ? (a(), r("thead", Wt, [
          o("tr", null, [
            (a(!0), r(p, null, f(s.headings, (n, _) => (a(), r("th", {
              key: _,
              style: d(l.head_styles[_]),
              onClick: (c) => l.sort_column(_)
            }, h(n), 13, Ht))), 128))
          ])
        ])) : g("", !0),
        o("tbody", {
          class: "tableComp_tbody",
          style: d(l.tbody_style)
        }, [
          (a(!0), r(p, null, f(i.rows_clone, (n, _) => (a(), r("tr", {
            key: _,
            class: "tableComp_tr__notselected",
            onClick: (c) => l.row_clicked(c, _)
          }, [
            (a(!0), r(p, null, f(Object.keys(n), (c, C) => (a(), r("td", {
              key: C,
              style: d(l.td_styles[_][C]),
              class: y(i.class_names[_][C]),
              onClick: ($) => l.cell_clicked(_, C)
            }, h(n[c]), 15, Rt))), 128))
          ], 8, zt))), 128))
        ], 4)
      ])
    ], 4)) : g("", !0)
  ]);
}
const ws = /* @__PURE__ */ m(Nt, [["render", Dt]]), Jt = {
  name: "VertAccordComp",
  props: {
    slotNames: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    contentHeight: {
      type: Number,
      default: 200
    },
    cssVariables: {
      type: Object,
      default: () => null
    }
  },
  mounted() {
    if (this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  },
  methods: {
    tit_mouseover: function(e) {
      const t = e.currentTarget.nextElementSibling;
      t.style = `height: ${this.contentHeight}px`;
    },
    tit_mouseout: function(e) {
      const t = e.currentTarget.nextElementSibling;
      t.style = "height: 0;";
    }
  }
}, Ft = { class: "vertAccordComp" }, Ut = { class: "vertAccordComp_uList" };
function qt(e, t, s, u, i, l) {
  return a(), r("div", Ft, [
    b(o("div", { class: "vertAccordComp_titleBox" }, h(s.title), 513), [
      [v, s.title]
    ]),
    o("ul", Ut, [
      (a(!0), r(p, null, f(s.slotNames, (n, _) => (a(), r("li", {
        key: _,
        class: "vertAccordComp_li"
      }, [
        o("div", {
          class: "vertAccordComp_itemTitle",
          onMouseover: t[0] || (t[0] = (c) => l.tit_mouseover(c)),
          onMouseout: t[1] || (t[1] = (c) => l.tit_mouseout(c))
        }, h(n), 33),
        k(e.$slots, n, { class: "vertAccordComp_itemContent" }, () => [
          x(" Fallback Content ")
        ])
      ]))), 128))
    ])
  ]);
}
const xs = /* @__PURE__ */ m(Jt, [["render", qt]]), Gt = {
  name: "WorkSheetComp",
  props: {
    rows: {
      type: Array,
      default: null
    },
    headings: {
      type: Array,
      default: null
    },
    columnWidths: {
      type: Array,
      default: null
    },
    sortDescending: {
      type: Boolean,
      default: !1
    },
    cssVariables: {
      type: Object,
      default: null
    }
  },
  emits: {
    workSheetCompCell: null
  },
  data() {
    return {
      headings_clone: null,
      rows_clone: null,
      n_cols: null,
      n_rows: null,
      selected_td: null,
      sort_col_idx: null,
      sort_descend: null,
      column_styles: null,
      col_class: null
    };
  },
  watch: {
    rows: function(e) {
      if (e !== null) {
        this.n_cols = e[0].length, this.n_rows = e.length;
        const t = [];
        for (let s = 0; s < this.n_rows; s++) {
          const u = [];
          for (let i = 0; i < this.n_cols; i++)
            u.push(e[s][i]);
          t.push(u);
        }
        this.rows_clone = JSON.parse(JSON.stringify(t)), this.headings_clone = new Array(this.headings.length);
        for (let s = 0; s < this.headings.length; s++)
          this.headings_clone[s] = this.headings[s];
        this.column_styles = new Array(this.n_cols);
        for (let s = 0; s < this.n_cols; s++)
          this.columnWidths === null || this.columnWidths[s] === null ? this.column_styles[s] = "min-width:120px;max-width:120px;overflow: hidden;" : this.column_styles[s] = `min-width:${this.columnWidths[s]}px;max-width:${this.columnWidths[s]}px;overflow: hidden;`;
        this.col_class = new Array(this.n_cols);
        for (let s = 0; s < this.n_cols; s++)
          s === 0 ? this.col_class[s] = "col-idx-no col-not-selected" : this.col_class[s] = "col-not-selected";
      }
    }
  },
  methods: {
    cell_click: function(e, t, s) {
      this.selected_td !== null && (this.selected_td.classList.remove("col-selected"), this.selected_td.classList.add("col-not-selected")), e.currentTarget.classList.add("col-selected"), this.selected_td = e.currentTarget, this.$emit("workSheetCompCell", { row: t, col: s });
    },
    sort_column: function(e) {
      const t = JSON.parse(JSON.stringify(this.rows));
      t.sort((s, u) => {
        let i = s[e], l = u[e];
        return typeof i == "string" && (i = i.toLowerCase()), typeof l == "string" && (l = l.toLowerCase()), this.sort_descend ? i < l ? 1 : i > l ? -1 : 0 : i < l ? -1 : i > l ? 1 : 0;
      }), this.rows_clone = t, e === this.sort_col_idx ? this.sort_descend = !this.sort_descend : this.sort_col_idx = e;
    }
  },
  mounted() {
    if (this.sort_descend = this.sortDescending, this.cssVariables !== null)
      for (let e of Object.keys(this.cssVariables))
        this.$el.style.setProperty(`--${e}`, this.cssVariables[e]);
  }
}, Kt = { class: "worksheetComp" }, Qt = { key: 0 }, Xt = { class: "data-table" }, Yt = ["onClick"], Zt = ["onClick"];
function es(e, t, s, u, i, l) {
  return a(), r("div", Kt, [
    i.rows_clone !== null ? (a(), r("div", Qt, [
      o("table", Xt, [
        o("thead", null, [
          o("tr", null, [
            (a(!0), r(p, null, f(i.headings_clone, (n, _) => (a(), r("th", {
              key: _,
              style: d(i.column_styles[_]),
              class: y(i.col_class[_]),
              onClick: (c) => l.sort_column(_)
            }, h(i.headings_clone[_]), 15, Yt))), 128))
          ])
        ]),
        o("tbody", null, [
          (a(!0), r(p, null, f(i.rows_clone, (n, _) => (a(), r("tr", { key: _ }, [
            (a(!0), r(p, null, f(i.n_cols, (c) => (a(), r("td", {
              key: c,
              class: y(i.col_class[c - 1]),
              onClick: (C) => l.cell_click(C, _, c - 1)
            }, h(n[c - 1]), 11, Zt))), 128))
          ]))), 128))
        ])
      ])
    ])) : g("", !0)
  ]);
}
const $s = /* @__PURE__ */ m(Gt, [["render", es]]);
export {
  ls as ActiveListComp,
  is as ButtonComp,
  ns as CheckerComp,
  os as CollapseComp,
  as as DndComp,
  rs as FadeComp,
  cs as FileReadComp,
  us as InfiniteScrollerComp,
  _s as InputComp,
  hs as IosMenuComp,
  ds as JsonTreeComp,
  ms as LabelComp,
  ps as MultiTableComp,
  fs as NavImageComp,
  ys as ProgressComp,
  gs as RangeComp,
  Cs as SelectComp,
  bs as SelectEditComp,
  vs as SliderComp,
  ks as TabComp,
  ws as TableComp,
  xs as VertAccordComp,
  $s as WorkSheetComp
};
