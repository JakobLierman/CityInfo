webpackJsonp([0], {
  "6S9P": function(l, n, u) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var e = u("WT6e"),
      t = u("bfOx"),
      r = (function() {
        function l(l) {
          this.route = l;
        }
        return (
          Object.defineProperty(l.prototype, "bericht", {
            get: function() {
              return this._bericht;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.ngOnInit = function() {
            var l = this;
            this.route.data.subscribe(
              function(n) {
                return (l._bericht = n.bericht);
              },
              function(n) {
                l.errorMsg =
                  "Error " +
                  n.status +
                  " bij het ophalen van het bericht: " +
                  n.error;
              }
            );
          }),
          l
        );
      })(),
      i = (function() {
        function l(l, n) {
          void 0 === n && (n = null),
            (this._dateAdded = new Date()),
            (this._boodschap = l),
            (this._dateAdded = n || new Date());
        }
        return (
          (l.fromJSON = function(n) {
            var u = new l(n.boodschap, n.created);
            return (u._id = n._id), u;
          }),
          (l.prototype.toJSON = function() {
            return {
              _id: this._id,
              boodschap: this._boodschap,
              user: this._user,
              created: this._dateAdded
            };
          }),
          Object.defineProperty(l.prototype, "id", {
            get: function() {
              return this._id;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "boodschap", {
            get: function() {
              return this._boodschap;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "user", {
            get: function() {
              return this._user;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "dateAdded", {
            get: function() {
              return this._dateAdded;
            },
            enumerable: !0,
            configurable: !0
          }),
          l
        );
      })(),
      o = u("l5y7"),
      a = (function() {
        function l(l, n) {
          void 0 === n && (n = null), (this._naam = l), (this._graad = n);
        }
        return (
          (l.fromJSON = function(n) {
            var u = new l(n.naam, n.graad);
            return (u._id = n._id), u;
          }),
          Object.defineProperty(l.prototype, "id", {
            get: function() {
              return this._id;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "naam", {
            get: function() {
              return this._naam;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "graad", {
            get: function() {
              return this._graad;
            },
            enumerable: !0,
            configurable: !0
          }),
          l
        );
      })(),
      c = (function() {
        function l(l, n, u, e) {
          void 0 === e && (e = null),
            (this._dateAdded = new Date()),
            (this._titel = l),
            (this._boodschap = n),
            (this._categorie = u),
            (this._dateAdded = e || new Date());
        }
        return (
          (l.fromJSON = function(n) {
            var u = new l(n.titel, n.boodschap, n.categorie, n.created);
            return (
              (u._id = n._id),
              (u._user = n.user),
              (u._reacties = n.reacties.map(i.fromJSON)),
              u
            );
          }),
          (l.prototype.toJSON = function() {
            return {
              _id: this._id,
              titel: this._titel,
              boodschap: this._boodschap,
              categorie: this._categorie,
              user: this._user,
              created: this._dateAdded
            };
          }),
          Object.defineProperty(l.prototype, "id", {
            get: function() {
              return this._id;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "titel", {
            get: function() {
              return this._titel;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "boodschap", {
            get: function() {
              return this._boodschap;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "categorie", {
            get: function() {
              return this._categorie;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "user", {
            get: function() {
              return this._user;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "dateAdded", {
            get: function() {
              return this._dateAdded;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "reacties", {
            get: function() {
              return this._reacties;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.isNieuw = function() {
            return this._dateAdded.getDate() === new Date().getDate();
          }),
          (l.prototype.reactieToevoegen = function(l) {
            this._reacties.push(l);
          }),
          (l.prototype.reactieVerwijderen = function(l) {
            var n = this._reacties.indexOf(l);
            this._reacties.splice(n, 1);
          }),
          l
        );
      })(),
      s = u("ItHS"),
      _ = (function() {
        function l(l) {
          (this.http = l), (this._appUrl = "/API");
        }
        return (
          Object.defineProperty(l.prototype, "berichten", {
            get: function() {
              return this.http.get(this._appUrl + "/berichten/").pipe(
                Object(o.c)(function(l) {
                  return l.map(c.fromJSON);
                })
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.berichtToevoegen = function(l) {
            return this.http
              .post(this._appUrl + "/berichten/", l)
              .pipe(Object(o.c)(c.fromJSON));
          }),
          (l.prototype.verwijderBericht = function(l) {
            return this.http
              .delete(this._appUrl + "/bericht/" + l.id)
              .pipe(Object(o.c)(c.fromJSON));
          }),
          (l.prototype.getBerichtById = function(l) {
            return this.http
              .get(this._appUrl + "/bericht/" + l)
              .pipe(Object(o.c)(c.fromJSON));
          }),
          (l.prototype.getReactiesVanBericht = function(l) {
            return this.http
              .get(this._appUrl + "/bericht/" + l.id + "/reacties")
              .pipe(
                Object(o.c)(function(l) {
                  return l.map(i.fromJSON);
                })
              );
          }),
          (l.prototype.voegReactieToeAanBericht = function(l, n) {
            return this.http
              .post(this._appUrl + "/bericht/" + n.id + "/reacties", l)
              .pipe(Object(o.c)(i.fromJSON));
          }),
          (l.prototype.verwijderReactieVanBericht = function(l, n) {
            return this.http
              .delete(this._appUrl + "/bericht/" + n.id + "/reactie/" + l.id)
              .pipe(Object(o.c)(i.fromJSON));
          }),
          Object.defineProperty(l.prototype, "categorieen", {
            get: function() {
              return this.http.get(this._appUrl + "/categorieen/").pipe(
                Object(o.c)(function(l) {
                  return l.map(a.fromJSON);
                })
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.categorieToevoegen = function(l) {
            return this.http
              .post(this._appUrl + "/categorieen/", l)
              .pipe(Object(o.c)(a.fromJSON));
          }),
          (l.prototype.categorieVerwijderen = function(l) {
            return this.http
              .delete(this._appUrl + "/categorie/" + l.id)
              .pipe(Object(o.c)(a.fromJSON));
          }),
          l
        );
      })(),
      d = u("g5jc"),
      h = (function() {
        function l(l) {
          var n = this;
          (this._berichtDataService = l),
            (this.filterBericht$ = new d.a()),
            this.filterBericht$
              .pipe(
                Object(o.b)(),
                Object(o.a)(400),
                Object(o.c)(function(l) {
                  return l.toLowerCase();
                })
              )
              .subscribe(function(l) {
                return (n.filterBerichtTitel = l);
              });
        }
        return (
          (l.prototype.ngOnInit = function() {
            var l = this;
            this._berichtDataService.berichten.subscribe(
              function(n) {
                return (l._berichten = n);
              },
              function(n) {
                l.errorMsg =
                  "Error " +
                  n.status +
                  " bij het ophalen van de berichten: " +
                  n.error;
              }
            );
          }),
          Object.defineProperty(l.prototype, "berichten", {
            get: function() {
              return this._berichten;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.verwijderBericht = function(l) {
            var n = this;
            this._berichtDataService.verwijderBericht(l).subscribe(
              function(l) {
                return (n._berichten = n._berichten.filter(function(n) {
                  return l.id !== n.id;
                }));
              },
              function(u) {
                n.errorMsg =
                  "Error " +
                  u.status +
                  ' bij het verwijderen van bericht met titel "' +
                  l.titel +
                  '": ' +
                  u.error;
              }
            );
          }),
          l
        );
      })(),
      g = (function() {
        function l(l) {
          this.berichtDataService = l;
        }
        return (
          (l.prototype.resolve = function(l, n) {
            return this.berichtDataService.getBerichtById(l.params.id);
          }),
          l
        );
      })(),
      p = u("7DMc"),
      b = (function() {
        function l(l, n, u) {
          (this.fb = l), (this._berichtDataService = n), (this.router = u);
        }
        return (
          (l.prototype.ngOnInit = function() {
            var l = this;
            this._berichtDataService.categorieen.subscribe(
              function(n) {
                return (l._categorieen = n);
              },
              function(n) {
                l.errorMsg =
                  "Error " +
                  n.status +
                  " bij het ophalen van de categorie\xebn: " +
                  n.error;
              }
            ),
              (this.bericht = this.fb.group({
                titel: [
                  "",
                  [p.t.required, p.t.minLength(2), p.t.maxLength(100)]
                ],
                boodschap: ["", [p.t.required, p.t.minLength(25)]],
                categorie: ["", [p.t.required]]
              }));
          }),
          Object.defineProperty(l.prototype, "categorieen", {
            get: function() {
              return this._categorieen;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.onSubmit = function() {
            var l = this,
              n = new c(
                this.bericht.value.titel,
                this.bericht.value.boodschap,
                this.bericht.value.categorie
              );
            this._berichtDataService.berichtToevoegen(n).subscribe(
              function() {
                l.router.navigate(["bericht/lijst"]);
              },
              function(u) {
                l.errorMsg =
                  "Error " +
                  u.status +
                  ' bij het toevoegen van bericht met titel "' +
                  n.titel +
                  '": ' +
                  u.error;
              }
            );
          }),
          l
        );
      })(),
      f = function() {},
      m = u("Xjw4"),
      v = u("IF3F"),
      y = (function() {
        function l(l) {
          (this._auth = l), (this.deleteBericht = new e.m());
        }
        return (
          Object.defineProperty(l.prototype, "currentUser", {
            get: function() {
              return this._currentUser;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.ngOnInit = function() {
            var l = this;
            this._auth.token &&
              this._auth.currentUser$.subscribe(function(n) {
                return (l._currentUser = n);
              });
          }),
          (l.prototype.verwijderBericht = function() {
            this.deleteBericht.emit(this.bericht);
          }),
          l
        );
      })(),
      k = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function j(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            1,
            "span",
            [["class", "badge badge-secondary"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["Nieuw"]))
        ],
        null,
        null
      );
    }
    function O(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            1,
            "i",
            [["class", "text-muted"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["Open het bericht om alles weer te geven."]))
        ],
        null,
        null
      );
    }
    function C(l) {
      return e._24(
        0,
        [
          e._16(0, m.d, [e.s]),
          (l()(),
          e._3(
            1,
            0,
            null,
            null,
            53,
            "div",
            [["class", "card shadow bg-white rounded mb-4 mt-4"]],
            null,
            null,
            null,
            null,
            null
          )),
          e._2(
            2,
            278528,
            null,
            0,
            m.i,
            [e.q, e.r, e.k, e.B],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          e._17(3, {
            "border-danger": 0,
            "border-warning": 1,
            "border-info": 2
          }),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            5,
            0,
            null,
            null,
            43,
            "div",
            [["class", "card-body"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            7,
            0,
            null,
            null,
            4,
            "h3",
            [["class", "card-title"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(8, null, ["", "\n            "])),
          (l()(), e.Y(16777216, null, null, 1, null, j)),
          e._2(
            10,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            13,
            0,
            null,
            null,
            9,
            "p",
            [["class", "card-text"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(14, null, ["", "\n            "])),
          e._16(0, m.p, []),
          (l()(),
          e._3(16, 0, null, null, 0, "br", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n            "])),
          (l()(),
          e._3(
            18,
            0,
            null,
            null,
            3,
            "a",
            [],
            [[1, "target", 0], [8, "href", 4]],
            [[null, "click"]],
            function(l, n, u) {
              var t = !0;
              return (
                "click" === n &&
                  (t =
                    !1 !==
                      e
                        ._14(l, 19)
                        .onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) &&
                    t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            19,
            671744,
            null,
            0,
            t.m,
            [t.k, t.a, m.h],
            { routerLink: [0, "routerLink"] },
            null
          ),
          (l()(), e.Y(16777216, null, null, 1, null, O)),
          e._2(
            21,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            24,
            0,
            null,
            null,
            6,
            "p",
            [["class", "card-text"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n            "])),
          (l()(),
          e._3(
            26,
            0,
            null,
            null,
            3,
            "small",
            [["class", "text-muted"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(27, null, ["Categorie: ", "\n                "])),
          (l()(),
          e._3(28, 0, null, null, 0, "br", [], null, null, null, null, null)),
          (l()(), e._22(29, null, ["", " reacties."])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            32,
            0,
            null,
            null,
            9,
            "div",
            [["class", "btn-group"], ["role", "group"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n            "])),
          (l()(),
          e._3(
            34,
            0,
            null,
            null,
            2,
            "a",
            [["class", "btn btn-primary"]],
            [[1, "target", 0], [8, "href", 4]],
            [[null, "click"]],
            function(l, n, u) {
              var t = !0;
              return (
                "click" === n &&
                  (t =
                    !1 !==
                      e
                        ._14(l, 35)
                        .onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) &&
                    t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            35,
            671744,
            null,
            0,
            t.m,
            [t.k, t.a, m.h],
            { routerLink: [0, "routerLink"] },
            null
          ),
          (l()(), e._22(-1, null, ["Openen"])),
          (l()(), e._22(-1, null, ["\n            "])),
          (l()(),
          e._3(
            38,
            0,
            null,
            null,
            2,
            "a",
            [["class", "btn btn-secondary"], ["fragment", "reageren"]],
            [[1, "target", 0], [8, "href", 4]],
            [[null, "click"]],
            function(l, n, u) {
              var t = !0;
              return (
                "click" === n &&
                  (t =
                    !1 !==
                      e
                        ._14(l, 39)
                        .onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) &&
                    t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            39,
            671744,
            null,
            0,
            t.m,
            [t.k, t.a, m.h],
            { fragment: [0, "fragment"], routerLink: [1, "routerLink"] },
            null
          ),
          (l()(), e._22(-1, null, ["Reageer"])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            43,
            0,
            null,
            null,
            4,
            "a",
            [["class", "btn btn-danger text-white"]],
            null,
            [[null, "click"]],
            function(l, n, u) {
              var e = !0;
              return (
                "click" === n &&
                  (e = !1 !== l.component.verwijderBericht() && e),
                e
              );
            },
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n            "])),
          (l()(), e._22(-1, null, ["\n            "])),
          (l()(),
          e._3(
            46,
            0,
            null,
            null,
            0,
            "i",
            [["class", "fas fa-trash"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, [" Verwijderen\n        "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            50,
            0,
            null,
            null,
            3,
            "div",
            [["class", "card-footer text-muted"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(),
          e._22(51, null, [
            "Door (( bericht.user.username )) op ",
            " om ",
            ".\n    "
          ])),
          e._18(52, 2),
          e._18(53, 2),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        function(l, n) {
          var u = n.component;
          l(
            n,
            2,
            0,
            "card shadow bg-white rounded mb-4 mt-4",
            l(
              n,
              3,
              0,
              1 === u.bericht.categorie.graad,
              2 === u.bericht.categorie.graad,
              3 === u.bericht.categorie.graad
            )
          ),
            l(n, 10, 0, u.bericht.isNieuw()),
            l(n, 19, 0, e._6(1, "/bericht/", u.bericht.id, "")),
            l(n, 21, 0, u.bericht.boodschap.length > 500),
            l(n, 35, 0, e._6(1, "/bericht/", u.bericht.id, "")),
            l(n, 39, 0, "reageren", e._6(1, "/bericht/", u.bericht.id, ""));
        },
        function(l, n) {
          var u = n.component;
          l(n, 8, 0, u.bericht.titel),
            l(
              n,
              14,
              0,
              e._23(
                n,
                14,
                0,
                e._14(n, 15).transform(u.bericht.boodschap, 0, 500)
              )
            ),
            l(n, 18, 0, e._14(n, 19).target, e._14(n, 19).href),
            l(n, 27, 0, u.bericht.categorie.naam),
            l(n, 29, 0, u.bericht.reacties.length),
            l(n, 34, 0, e._14(n, 35).target, e._14(n, 35).href),
            l(n, 38, 0, e._14(n, 39).target, e._14(n, 39).href),
            l(
              n,
              51,
              0,
              e._23(
                n,
                51,
                0,
                l(
                  n,
                  52,
                  0,
                  e._14(n, 0),
                  u.bericht.dateAdded,
                  "EEEE d MMMM yyyy"
                )
              ),
              e._23(
                n,
                51,
                1,
                l(n, 53, 0, e._14(n, 0), u.bericht.dateAdded, "H:mm")
              )
            );
        }
      );
    }
    var w = (function() {
        function l() {}
        return (
          (l.prototype.transform = function(l, n) {
            return n && 0 !== n.length
              ? l.filter(function(l) {
                  return l.titel.toLowerCase().startsWith(n.toLowerCase());
                })
              : l;
          }),
          l
        );
      })(),
      S = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function I(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            4,
            "div",
            [["class", "alert alert-danger"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            2,
            0,
            null,
            null,
            1,
            "strong",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["Oh ow"])),
          (l()(), e._22(4, null, [" ", "\n"]))
        ],
        null,
        function(l, n) {
          l(n, 4, 0, n.component.errorMsg);
        }
      );
    }
    function M(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(0, 0, null, null, 1, "app-bericht", [], null, null, null, C, k)),
          e._2(1, 114688, null, 0, y, [v.a], { bericht: [0, "bericht"] }, null)
        ],
        function(l, n) {
          l(n, 1, 0, n.context.$implicit);
        },
        null
      );
    }
    function B(l) {
      return e._24(
        0,
        [
          e._16(0, w, []),
          (l()(),
          e._3(
            1,
            0,
            null,
            null,
            3,
            "div",
            [["class", "mb-4"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            3,
            0,
            null,
            null,
            0,
            "input",
            [
              ["class", "form-control"],
              ["id", "filter"],
              ["name", "filter"],
              ["placeholder", "Zoeken op titel"],
              ["type", "text"]
            ],
            null,
            [[null, "keyup"]],
            function(l, n, u) {
              var e = !0;
              return (
                "keyup" === n &&
                  (e =
                    !1 !== l.component.filterBericht$.next(u.target.value) &&
                    e),
                e
              );
            },
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(),
          e._3(
            6,
            0,
            null,
            null,
            14,
            "div",
            [
              ["class", "alert alert-success alert-dismissible fade show"],
              ["role", "alert"]
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            9,
            0,
            null,
            null,
            1,
            "strong",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["Gelukt!"])),
          (l()(),
          e._22(-1, null, [" Het bericht werd succesvol toegevoegd.\n  "])),
          (l()(),
          e._3(
            12,
            0,
            null,
            null,
            7,
            "button",
            [
              ["aria-label", "Close"],
              ["class", "close"],
              ["data-dismiss", "alert"],
              ["type", "button"]
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            14,
            0,
            null,
            null,
            4,
            "span",
            [["aria-hidden", "true"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            16,
            0,
            null,
            null,
            1,
            "i",
            [["class", "material-icons"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["clear"])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e.Y(16777216, null, null, 1, null, I)),
          e._2(
            23,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(),
          e._3(25, 0, null, null, 5, "div", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e.Y(16777216, null, null, 2, null, M)),
          e._2(
            28,
            802816,
            null,
            0,
            m.j,
            [e.M, e.J, e.q],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          e._18(29, 2),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        function(l, n) {
          var u = n.component;
          l(n, 23, 0, u.errorMsg),
            l(
              n,
              28,
              0,
              e._23(
                n,
                28,
                0,
                l(n, 29, 0, e._14(n, 0), u.berichten, u.filterBerichtTitel)
              )
            );
        },
        null
      );
    }
    var P = e.Z(
        "app-bericht-lijst",
        h,
        function(l) {
          return e._24(
            0,
            [
              (l()(),
              e._3(
                0,
                0,
                null,
                null,
                1,
                "app-bericht-lijst",
                [],
                null,
                null,
                null,
                B,
                S
              )),
              e._2(1, 114688, null, 0, h, [_], null, null)
            ],
            function(l, n) {
              l(n, 1, 0);
            },
            null
          );
        },
        {},
        {},
        []
      ),
      q = (function() {
        function l(l) {
          this.loc = l;
        }
        return (
          (l.prototype.ngOnInit = function() {}),
          (l.prototype.goBack = function() {
            this.loc.back(), console.log("Going back...");
          }),
          l
        );
      })(),
      J = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function x(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            3,
            "a",
            [["class", "btn btn-outline-secondary btn-sm"]],
            null,
            [[null, "click"]],
            function(l, n, u) {
              var e = !0;
              return "click" === n && (e = !1 !== l.component.goBack() && e), e;
            },
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            2,
            0,
            null,
            null,
            0,
            "i",
            [["class", "fas fa-chevron-left"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, [" Terug\n"]))
        ],
        null,
        null
      );
    }
    var D = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function N(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            10,
            "div",
            [
              ["class", "alert alert-danger alert-dismissible fade show"],
              ["role", "alert"]
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(1, null, ["", "\n    "])),
          (l()(),
          e._3(
            2,
            0,
            null,
            null,
            7,
            "button",
            [
              ["aria-label", "Close"],
              ["class", "close"],
              ["data-dismiss", "alert"],
              ["type", "button"]
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            4,
            0,
            null,
            null,
            4,
            "span",
            [["aria-hidden", "true"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            6,
            0,
            null,
            null,
            1,
            "i",
            [["class", "material-icons"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["clear"])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n  "]))
        ],
        null,
        function(l, n) {
          l(n, 1, 0, n.component.errorMsg);
        }
      );
    }
    function E(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            3,
            "option",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          e._2(
            1,
            147456,
            null,
            0,
            p.p,
            [e.k, e.B, [2, p.s]],
            { value: [0, "value"] },
            null
          ),
          e._2(
            2,
            147456,
            null,
            0,
            p.x,
            [e.k, e.B, [8, null]],
            { value: [0, "value"] },
            null
          ),
          (l()(), e._22(3, null, ["", ""]))
        ],
        function(l, n) {
          l(n, 1, 0, e._6(1, "", n.context.$implicit.id, "")),
            l(n, 2, 0, e._6(1, "", n.context.$implicit.id, ""));
        },
        function(l, n) {
          l(n, 3, 0, n.context.$implicit.naam);
        }
      );
    }
    function T(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            7,
            "div",
            [["class", "container"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            2,
            0,
            null,
            null,
            4,
            "div",
            [["class", "row mb-4"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            4,
            0,
            null,
            null,
            1,
            "app-back-button",
            [],
            null,
            null,
            null,
            x,
            J
          )),
          e._2(5, 114688, null, 0, q, [m.g], null, null),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e._22(-1, null, ["\n\n"])),
          (l()(),
          e._3(
            9,
            0,
            null,
            null,
            76,
            "form",
            [["class", "col-xl-6 col-md-8 col-sm-12"], ["novalidate", ""]],
            [
              [2, "ng-untouched", null],
              [2, "ng-touched", null],
              [2, "ng-pristine", null],
              [2, "ng-dirty", null],
              [2, "ng-valid", null],
              [2, "ng-invalid", null],
              [2, "ng-pending", null]
            ],
            [[null, "ngSubmit"], [null, "submit"], [null, "reset"]],
            function(l, n, u) {
              var t = !0,
                r = l.component;
              return (
                "submit" === n && (t = !1 !== e._14(l, 11).onSubmit(u) && t),
                "reset" === n && (t = !1 !== e._14(l, 11).onReset() && t),
                "ngSubmit" === n && (t = !1 !== r.onSubmit() && t),
                t
              );
            },
            null,
            null
          )),
          e._2(10, 16384, null, 0, p.v, [], null, null),
          e._2(
            11,
            540672,
            null,
            0,
            p.g,
            [[8, null], [8, null]],
            { form: [0, "form"] },
            { ngSubmit: "ngSubmit" }
          ),
          e._19(2048, null, p.b, null, [p.g]),
          e._2(13, 16384, null, 0, p.o, [p.b], null, null),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(15, 0, null, null, 1, "h2", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["Bericht toevoegen"])),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(), e.Y(16777216, null, null, 1, null, N)),
          e._2(
            19,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(),
          e._3(
            21,
            0,
            null,
            null,
            17,
            "div",
            [["class", "form-group"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            23,
            0,
            null,
            null,
            11,
            "input",
            [
              ["class", "form-control"],
              ["formControlName", "titel"],
              ["id", "titel"],
              ["maxlength", "100"],
              ["minlength", "2"],
              ["name", "titel"],
              ["placeholder", "Titel"],
              ["required", ""]
            ],
            [
              [1, "required", 0],
              [1, "minlength", 0],
              [1, "maxlength", 0],
              [2, "ng-untouched", null],
              [2, "ng-touched", null],
              [2, "ng-pristine", null],
              [2, "ng-dirty", null],
              [2, "ng-valid", null],
              [2, "ng-invalid", null],
              [2, "ng-pending", null]
            ],
            [
              [null, "input"],
              [null, "blur"],
              [null, "compositionstart"],
              [null, "compositionend"]
            ],
            function(l, n, u) {
              var t = !0;
              return (
                "input" === n &&
                  (t = !1 !== e._14(l, 26)._handleInput(u.target.value) && t),
                "blur" === n && (t = !1 !== e._14(l, 26).onTouched() && t),
                "compositionstart" === n &&
                  (t = !1 !== e._14(l, 26)._compositionStart() && t),
                "compositionend" === n &&
                  (t =
                    !1 !== e._14(l, 26)._compositionEnd(u.target.value) && t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            24,
            278528,
            null,
            0,
            m.i,
            [e.q, e.r, e.k, e.B],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          e._17(25, { "is-invalid": 0 }),
          e._2(26, 16384, null, 0, p.c, [e.B, e.k, [2, p.a]], null, null),
          e._2(
            27,
            16384,
            null,
            0,
            p.r,
            [],
            { required: [0, "required"] },
            null
          ),
          e._2(
            28,
            540672,
            null,
            0,
            p.j,
            [],
            { minlength: [0, "minlength"] },
            null
          ),
          e._2(
            29,
            540672,
            null,
            0,
            p.i,
            [],
            { maxlength: [0, "maxlength"] },
            null
          ),
          e._19(
            1024,
            null,
            p.k,
            function(l, n, u) {
              return [l, n, u];
            },
            [p.r, p.j, p.i]
          ),
          e._19(
            1024,
            null,
            p.l,
            function(l) {
              return [l];
            },
            [p.c]
          ),
          e._2(
            32,
            671744,
            null,
            0,
            p.f,
            [[3, p.b], [2, p.k], [8, null], [2, p.l]],
            { name: [0, "name"] },
            null
          ),
          e._19(2048, null, p.m, null, [p.f]),
          e._2(34, 16384, null, 0, p.n, [p.m], null, null),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            36,
            0,
            null,
            null,
            1,
            "div",
            [["class", "invalid-feedback"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(),
          e._22(-1, null, [
            "Een bericht moet een titel hebben van meer dan 2 tekens."
          ])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(),
          e._3(
            40,
            0,
            null,
            null,
            15,
            "div",
            [["class", "form-group"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            42,
            0,
            null,
            null,
            9,
            "textarea",
            [
              ["class", "form-control"],
              ["formControlName", "boodschap"],
              ["id", "boodschap"],
              ["placeholder", "Voer hier je bericht in."],
              ["required", ""],
              ["rows", "5"]
            ],
            [
              [1, "required", 0],
              [2, "ng-untouched", null],
              [2, "ng-touched", null],
              [2, "ng-pristine", null],
              [2, "ng-dirty", null],
              [2, "ng-valid", null],
              [2, "ng-invalid", null],
              [2, "ng-pending", null]
            ],
            [
              [null, "input"],
              [null, "blur"],
              [null, "compositionstart"],
              [null, "compositionend"]
            ],
            function(l, n, u) {
              var t = !0;
              return (
                "input" === n &&
                  (t = !1 !== e._14(l, 45)._handleInput(u.target.value) && t),
                "blur" === n && (t = !1 !== e._14(l, 45).onTouched() && t),
                "compositionstart" === n &&
                  (t = !1 !== e._14(l, 45)._compositionStart() && t),
                "compositionend" === n &&
                  (t =
                    !1 !== e._14(l, 45)._compositionEnd(u.target.value) && t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            43,
            278528,
            null,
            0,
            m.i,
            [e.q, e.r, e.k, e.B],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          e._17(44, { "is-invalid": 0 }),
          e._2(45, 16384, null, 0, p.c, [e.B, e.k, [2, p.a]], null, null),
          e._2(
            46,
            16384,
            null,
            0,
            p.r,
            [],
            { required: [0, "required"] },
            null
          ),
          e._19(
            1024,
            null,
            p.k,
            function(l) {
              return [l];
            },
            [p.r]
          ),
          e._19(
            1024,
            null,
            p.l,
            function(l) {
              return [l];
            },
            [p.c]
          ),
          e._2(
            49,
            671744,
            null,
            0,
            p.f,
            [[3, p.b], [2, p.k], [8, null], [2, p.l]],
            { name: [0, "name"] },
            null
          ),
          e._19(2048, null, p.m, null, [p.f]),
          e._2(51, 16384, null, 0, p.n, [p.m], null, null),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            53,
            0,
            null,
            null,
            1,
            "div",
            [["class", "invalid-feedback"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(),
          e._22(-1, null, ["Een bericht moet minstens 25 tekens bevatten."])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(),
          e._3(
            57,
            0,
            null,
            null,
            24,
            "div",
            [["class", "form-group"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            59,
            0,
            null,
            null,
            18,
            "select",
            [
              ["class", "form-control"],
              ["formControlName", "categorie"],
              ["id", "categorie"],
              ["required", ""]
            ],
            [
              [1, "required", 0],
              [2, "ng-untouched", null],
              [2, "ng-touched", null],
              [2, "ng-pristine", null],
              [2, "ng-dirty", null],
              [2, "ng-valid", null],
              [2, "ng-invalid", null],
              [2, "ng-pending", null]
            ],
            [[null, "change"], [null, "blur"]],
            function(l, n, u) {
              var t = !0;
              return (
                "change" === n &&
                  (t = !1 !== e._14(l, 62).onChange(u.target.value) && t),
                "blur" === n && (t = !1 !== e._14(l, 62).onTouched() && t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            60,
            278528,
            null,
            0,
            m.i,
            [e.q, e.r, e.k, e.B],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          e._17(61, { "is-invalid": 0 }),
          e._2(62, 16384, null, 0, p.s, [e.B, e.k], null, null),
          e._2(
            63,
            16384,
            null,
            0,
            p.r,
            [],
            { required: [0, "required"] },
            null
          ),
          e._19(
            1024,
            null,
            p.k,
            function(l) {
              return [l];
            },
            [p.r]
          ),
          e._19(
            1024,
            null,
            p.l,
            function(l) {
              return [l];
            },
            [p.s]
          ),
          e._2(
            66,
            671744,
            null,
            0,
            p.f,
            [[3, p.b], [2, p.k], [8, null], [2, p.l]],
            { name: [0, "name"] },
            null
          ),
          e._19(2048, null, p.m, null, [p.f]),
          e._2(68, 16384, null, 0, p.n, [p.m], null, null),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            70,
            0,
            null,
            null,
            3,
            "option",
            [["disabled", ""], ["selected", ""], ["value", ""]],
            null,
            null,
            null,
            null,
            null
          )),
          e._2(
            71,
            147456,
            null,
            0,
            p.p,
            [e.k, e.B, [2, p.s]],
            { value: [0, "value"] },
            null
          ),
          e._2(
            72,
            147456,
            null,
            0,
            p.x,
            [e.k, e.B, [8, null]],
            { value: [0, "value"] },
            null
          ),
          (l()(), e._22(-1, null, ["Kies een categorie"])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e.Y(16777216, null, null, 1, null, E)),
          e._2(
            76,
            802816,
            null,
            0,
            m.j,
            [e.M, e.J, e.q],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            79,
            0,
            null,
            null,
            1,
            "div",
            [["class", "invalid-feedback"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(),
          e._22(-1, null, ["Je hebt nog geen categorie geselecteerd."])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(),
          e._3(
            83,
            0,
            null,
            null,
            1,
            "button",
            [["class", "btn btn-primary"], ["type", "submit"]],
            [[8, "disabled", 0]],
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["Bericht plaatsen"])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        function(l, n) {
          var u = n.component;
          l(n, 5, 0),
            l(n, 11, 0, u.bericht),
            l(n, 19, 0, u.errorMsg),
            l(
              n,
              24,
              0,
              "form-control",
              l(
                n,
                25,
                0,
                !!u.bericht.get("titel").errors &&
                  (u.bericht.get("titel").touched ||
                    u.bericht.get("titel").dirty)
              )
            ),
            l(n, 27, 0, ""),
            l(n, 28, 0, "2"),
            l(n, 29, 0, "100"),
            l(n, 32, 0, "titel"),
            l(
              n,
              43,
              0,
              "form-control",
              l(
                n,
                44,
                0,
                !!u.bericht.get("boodschap").errors &&
                  (u.bericht.get("boodschap").touched ||
                    u.bericht.get("boodschap").dirty)
              )
            ),
            l(n, 46, 0, ""),
            l(n, 49, 0, "boodschap"),
            l(
              n,
              60,
              0,
              "form-control",
              l(
                n,
                61,
                0,
                !!u.bericht.get("categorie").errors &&
                  (u.bericht.get("categorie").touched ||
                    u.bericht.get("categorie").dirty)
              )
            ),
            l(n, 63, 0, ""),
            l(n, 66, 0, "categorie"),
            l(n, 71, 0, ""),
            l(n, 72, 0, ""),
            l(n, 76, 0, u.categorieen);
        },
        function(l, n) {
          var u = n.component;
          l(
            n,
            9,
            0,
            e._14(n, 13).ngClassUntouched,
            e._14(n, 13).ngClassTouched,
            e._14(n, 13).ngClassPristine,
            e._14(n, 13).ngClassDirty,
            e._14(n, 13).ngClassValid,
            e._14(n, 13).ngClassInvalid,
            e._14(n, 13).ngClassPending
          ),
            l(
              n,
              23,
              0,
              e._14(n, 27).required ? "" : null,
              e._14(n, 28).minlength ? e._14(n, 28).minlength : null,
              e._14(n, 29).maxlength ? e._14(n, 29).maxlength : null,
              e._14(n, 34).ngClassUntouched,
              e._14(n, 34).ngClassTouched,
              e._14(n, 34).ngClassPristine,
              e._14(n, 34).ngClassDirty,
              e._14(n, 34).ngClassValid,
              e._14(n, 34).ngClassInvalid,
              e._14(n, 34).ngClassPending
            ),
            l(
              n,
              42,
              0,
              e._14(n, 46).required ? "" : null,
              e._14(n, 51).ngClassUntouched,
              e._14(n, 51).ngClassTouched,
              e._14(n, 51).ngClassPristine,
              e._14(n, 51).ngClassDirty,
              e._14(n, 51).ngClassValid,
              e._14(n, 51).ngClassInvalid,
              e._14(n, 51).ngClassPending
            ),
            l(
              n,
              59,
              0,
              e._14(n, 63).required ? "" : null,
              e._14(n, 68).ngClassUntouched,
              e._14(n, 68).ngClassTouched,
              e._14(n, 68).ngClassPristine,
              e._14(n, 68).ngClassDirty,
              e._14(n, 68).ngClassValid,
              e._14(n, 68).ngClassInvalid,
              e._14(n, 68).ngClassPending
            ),
            l(n, 83, 0, !u.bericht.valid);
        }
      );
    }
    var U = e.Z(
        "app-bericht-toevoegen",
        b,
        function(l) {
          return e._24(
            0,
            [
              (l()(),
              e._3(
                0,
                0,
                null,
                null,
                1,
                "app-bericht-toevoegen",
                [],
                null,
                null,
                null,
                T,
                D
              )),
              e._2(1, 114688, null, 0, b, [p.e, _, t.k], null, null)
            ],
            function(l, n) {
              l(n, 1, 0);
            },
            null
          );
        },
        {},
        {},
        []
      ),
      A = (function() {
        function l() {
          this.deleteReactie = new e.m();
        }
        return (
          (l.prototype.ngOnInit = function() {}),
          (l.prototype.verwijderReactie = function() {
            this.deleteReactie.emit(this.reactie);
          }),
          l
        );
      })(),
      R = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function V(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            4,
            "a",
            [["class", "btn btn-danger btn-sm text-white"]],
            null,
            [[null, "click"]],
            function(l, n, u) {
              var e = !0;
              return (
                "click" === n &&
                  (e = !1 !== l.component.verwijderReactie() && e),
                e
              );
            },
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            3,
            0,
            null,
            null,
            0,
            "i",
            [["class", "fas fa-trash"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, [" Verwijderen\n      "]))
        ],
        null,
        null
      );
    }
    function Y(l) {
      return e._24(
        0,
        [
          e._16(0, m.d, [e.s]),
          (l()(),
          e._3(
            1,
            0,
            null,
            null,
            25,
            "div",
            [["class", "mb-2"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            3,
            0,
            null,
            null,
            22,
            "div",
            [["class", "border border-secundary rounded bg-light"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            5,
            0,
            null,
            null,
            19,
            "div",
            [["class", "container pl-2 pr-2 mt-2 mb-2"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(7, 0, null, null, 10, "p", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            9,
            0,
            null,
            null,
            1,
            "span",
            [["class", "font-weight-bold"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["(( reactie.user.naam ))"])),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(12, 0, null, null, 0, "br", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            14,
            0,
            null,
            null,
            2,
            "span",
            [["class", "text-muted ml-auto"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(15, null, ["", ""])),
          e._18(16, 2),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            19,
            0,
            null,
            null,
            1,
            "p",
            [["class", "font-weight-light"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(20, null, ["", ""])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e.Y(16777216, null, null, 1, null, V)),
          e._2(
            23,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        function(l, n) {
          l(n, 23, 0, !0);
        },
        function(l, n) {
          var u = n.component;
          l(
            n,
            15,
            0,
            e._23(
              n,
              15,
              0,
              l(n, 16, 0, e._14(n, 0), u.reactie.dateAdded, "d/M/yy, h:mm")
            )
          ),
            l(n, 20, 0, u.reactie.boodschap);
        }
      );
    }
    var K = (function() {
        function l(l, n, u) {
          (this.route = l), (this.fb = n), (this._berichtDataService = u);
        }
        return (
          Object.defineProperty(l.prototype, "bericht", {
            get: function() {
              return this._bericht;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.ngOnInit = function() {
            var l = this;
            this.route.data.subscribe(
              function(n) {
                return (l._bericht = n.bericht);
              },
              function(n) {
                l.errorMsg =
                  "Error " +
                  n.status +
                  " bij het ophalen van het bericht: " +
                  n.error;
              }
            ),
              (this.reactie = this.fb.group({
                boodschap: ["", [p.t.required]]
              }));
          }),
          (l.prototype.onSubmit = function() {
            var l = this,
              n = new i(this.reactie.value.boodschap);
            this._berichtDataService
              .voegReactieToeAanBericht(n, this._bericht)
              .subscribe(
                function() {
                  l.reactie.reset(), l._bericht.reactieToevoegen(n);
                },
                function(n) {
                  l.errorMsg =
                    "Error " +
                    n.status +
                    " bij het toevoegen van reactie: " +
                    n.error;
                }
              );
          }),
          l
        );
      })(),
      L = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function F(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            10,
            "div",
            [
              ["class", "alert alert-danger alert-dismissible fade show"],
              ["role", "alert"]
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(1, null, ["", "\n    "])),
          (l()(),
          e._3(
            2,
            0,
            null,
            null,
            7,
            "button",
            [
              ["aria-label", "Close"],
              ["class", "close"],
              ["data-dismiss", "alert"],
              ["type", "button"]
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            4,
            0,
            null,
            null,
            4,
            "span",
            [["aria-hidden", "true"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            6,
            0,
            null,
            null,
            1,
            "i",
            [["class", "material-icons"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["clear"])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n  "]))
        ],
        null,
        function(l, n) {
          l(n, 1, 0, n.component.errorMsg);
        }
      );
    }
    function $(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            1,
            "div",
            [["class", "alert alert-danger"], ["role", "alert"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(),
          e._22(-1, null, ["\n    Een reactie kan niet leeg zijn.\n  "]))
        ],
        null,
        null
      );
    }
    function H(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            36,
            "form",
            [["novalidate", ""]],
            [
              [2, "ng-untouched", null],
              [2, "ng-touched", null],
              [2, "ng-pristine", null],
              [2, "ng-dirty", null],
              [2, "ng-valid", null],
              [2, "ng-invalid", null],
              [2, "ng-pending", null]
            ],
            [[null, "ngSubmit"], [null, "submit"], [null, "reset"]],
            function(l, n, u) {
              var t = !0,
                r = l.component;
              return (
                "submit" === n && (t = !1 !== e._14(l, 2).onSubmit(u) && t),
                "reset" === n && (t = !1 !== e._14(l, 2).onReset() && t),
                "ngSubmit" === n && (t = !1 !== r.onSubmit() && t),
                t
              );
            },
            null,
            null
          )),
          e._2(1, 16384, null, 0, p.v, [], null, null),
          e._2(
            2,
            540672,
            null,
            0,
            p.g,
            [[8, null], [8, null]],
            { form: [0, "form"] },
            { ngSubmit: "ngSubmit" }
          ),
          e._19(2048, null, p.b, null, [p.g]),
          e._2(4, 16384, null, 0, p.o, [p.b], null, null),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(), e.Y(16777216, null, null, 1, null, F)),
          e._2(7, 16384, null, 0, m.k, [e.M, e.J], { ngIf: [0, "ngIf"] }, null),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(),
          e._3(
            9,
            0,
            null,
            null,
            23,
            "div",
            [["class", "form-group"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            11,
            0,
            null,
            null,
            20,
            "div",
            [["class", "input-group"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            13,
            0,
            null,
            null,
            9,
            "input",
            [
              ["class", "form-control"],
              ["formControlName", "boodschap"],
              ["id", "reageren"],
              ["name", "boodschap"],
              ["placeholder", "Reactie"],
              ["required", ""],
              ["type", "text"]
            ],
            [
              [1, "required", 0],
              [2, "ng-untouched", null],
              [2, "ng-touched", null],
              [2, "ng-pristine", null],
              [2, "ng-dirty", null],
              [2, "ng-valid", null],
              [2, "ng-invalid", null],
              [2, "ng-pending", null]
            ],
            [
              [null, "input"],
              [null, "blur"],
              [null, "compositionstart"],
              [null, "compositionend"]
            ],
            function(l, n, u) {
              var t = !0;
              return (
                "input" === n &&
                  (t = !1 !== e._14(l, 16)._handleInput(u.target.value) && t),
                "blur" === n && (t = !1 !== e._14(l, 16).onTouched() && t),
                "compositionstart" === n &&
                  (t = !1 !== e._14(l, 16)._compositionStart() && t),
                "compositionend" === n &&
                  (t =
                    !1 !== e._14(l, 16)._compositionEnd(u.target.value) && t),
                t
              );
            },
            null,
            null
          )),
          e._2(
            14,
            278528,
            null,
            0,
            m.i,
            [e.q, e.r, e.k, e.B],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          e._17(15, { "is-invalid": 0 }),
          e._2(16, 16384, null, 0, p.c, [e.B, e.k, [2, p.a]], null, null),
          e._2(
            17,
            16384,
            null,
            0,
            p.r,
            [],
            { required: [0, "required"] },
            null
          ),
          e._19(
            1024,
            null,
            p.k,
            function(l) {
              return [l];
            },
            [p.r]
          ),
          e._19(
            1024,
            null,
            p.l,
            function(l) {
              return [l];
            },
            [p.c]
          ),
          e._2(
            20,
            671744,
            null,
            0,
            p.f,
            [[3, p.b], [2, p.k], [8, null], [2, p.l]],
            { name: [0, "name"] },
            null
          ),
          e._19(2048, null, p.m, null, [p.f]),
          e._2(22, 16384, null, 0, p.n, [p.m], null, null),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            24,
            0,
            null,
            null,
            6,
            "div",
            [["class", "input-group-append"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n        "])),
          (l()(),
          e._3(
            26,
            0,
            null,
            null,
            3,
            "button",
            [["class", "btn btn-primary"], ["type", "submit"]],
            [[8, "disabled", 0]],
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n          "])),
          (l()(),
          e._3(
            28,
            0,
            null,
            null,
            0,
            "i",
            [["class", "fas fa-comment"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, [" Reageer"])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n\n  "])),
          (l()(), e.Y(16777216, null, null, 1, null, $)),
          e._2(
            35,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n\n"]))
        ],
        function(l, n) {
          var u = n.component;
          l(n, 2, 0, u.reactie),
            l(n, 7, 0, u.errorMsg),
            l(
              n,
              14,
              0,
              "form-control",
              l(
                n,
                15,
                0,
                !!u.reactie.get("boodschap").errors &&
                  (u.reactie.get("boodschap").touched ||
                    u.reactie.get("boodschap").dirty)
              )
            ),
            l(n, 17, 0, ""),
            l(n, 20, 0, "boodschap"),
            l(
              n,
              35,
              0,
              !(
                null == u.reactie.get("boodschap").errors ||
                !u.reactie.get("boodschap").errors.required
              ) &&
                (u.reactie.get("boodschap").touched ||
                  u.reactie.get("boodschap").dirty)
            );
        },
        function(l, n) {
          var u = n.component;
          l(
            n,
            0,
            0,
            e._14(n, 4).ngClassUntouched,
            e._14(n, 4).ngClassTouched,
            e._14(n, 4).ngClassPristine,
            e._14(n, 4).ngClassDirty,
            e._14(n, 4).ngClassValid,
            e._14(n, 4).ngClassInvalid,
            e._14(n, 4).ngClassPending
          ),
            l(
              n,
              13,
              0,
              e._14(n, 17).required ? "" : null,
              e._14(n, 22).ngClassUntouched,
              e._14(n, 22).ngClassTouched,
              e._14(n, 22).ngClassPristine,
              e._14(n, 22).ngClassDirty,
              e._14(n, 22).ngClassValid,
              e._14(n, 22).ngClassInvalid,
              e._14(n, 22).ngClassPending
            ),
            l(n, 26, 0, !u.reactie.valid);
        }
      );
    }
    var W = (function() {
        function l(l, n) {
          (this._berichtDataService = l), (this.route = n);
        }
        return (
          (l.prototype.ngOnInit = function() {
            var l = this;
            this.route.data.subscribe(
              function(n) {
                return (l._bericht = n.bericht);
              },
              function(n) {
                l.errorMsg =
                  "Error " +
                  n.status +
                  " bij het ophalen van het bericht: " +
                  n.error;
              }
            ),
              this._berichtDataService
                .getReactiesVanBericht(this._bericht)
                .subscribe(
                  function(n) {
                    return (l._reacties = n);
                  },
                  function(n) {
                    l.errorMsg =
                      "Error " + n.status + " bij het ophalen van reactie";
                  }
                );
          }),
          Object.defineProperty(l.prototype, "reacties", {
            get: function() {
              return this._reacties;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(l.prototype, "bericht", {
            get: function() {
              return this._bericht;
            },
            enumerable: !0,
            configurable: !0
          }),
          (l.prototype.verwijderReactie = function(l) {
            var n = this;
            this._berichtDataService
              .verwijderReactieVanBericht(l, this._bericht)
              .subscribe(
                function(l) {
                  return (n._reacties = n._reacties.filter(function(n) {
                    return l.id !== n.id;
                  }));
                },
                function(l) {
                  n.errorMsg =
                    "Error $error.status} bij het verwijderen van de reactie= " +
                    l.error;
                }
              );
          }),
          l
        );
      })(),
      X = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function Z(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            7,
            "div",
            [["class", "font-weight-light"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(2, 0, null, null, 4, "p", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(4, 0, null, null, 1, "i", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["Wees de eerste om te reageren!"])),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        null,
        null
      );
    }
    function G(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(0, 0, null, null, 1, "app-reactie", [], null, null, null, Y, R)),
          e._2(1, 114688, null, 0, A, [], { reactie: [0, "reactie"] }, null)
        ],
        function(l, n) {
          l(n, 1, 0, n.context.$implicit);
        },
        null
      );
    }
    function z(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(0, 0, null, null, 4, "div", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e.Y(16777216, null, null, 1, null, G)),
          e._2(
            3,
            802816,
            null,
            0,
            m.j,
            [e.M, e.J, e.q],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        function(l, n) {
          l(n, 3, 0, n.component.bericht.reacties);
        },
        null
      );
    }
    function Q(l) {
      return e._24(
        0,
        [
          (l()(), e.Y(16777216, null, null, 1, null, Z)),
          e._2(1, 16384, null, 0, m.k, [e.M, e.J], { ngIf: [0, "ngIf"] }, null),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e.Y(16777216, null, null, 1, null, z)),
          e._2(4, 16384, null, 0, m.k, [e.M, e.J], { ngIf: [0, "ngIf"] }, null),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(),
          e._3(
            6,
            0,
            null,
            null,
            1,
            "app-reactie-toevoegen",
            [],
            null,
            null,
            null,
            H,
            L
          )),
          e._2(7, 114688, null, 0, K, [t.a, p.e, _], null, null)
        ],
        function(l, n) {
          var u = n.component;
          l(n, 1, 0, 0 === u.bericht.reacties.length),
            l(n, 4, 0, 0 !== u.bericht.reacties.length),
            l(n, 7, 0);
        },
        null
      );
    }
    var ll = e._1({ encapsulation: 0, styles: [[""]], data: {} });
    function nl(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            4,
            "a",
            [["class", "btn btn-danger btn-sm text-white ml-auto"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(), e._22(-1, null, ["\n      "])),
          (l()(),
          e._3(
            3,
            0,
            null,
            null,
            0,
            "i",
            [["class", "fas fa-trash"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, [" Verwijderen\n    "]))
        ],
        null,
        null
      );
    }
    function ul(l) {
      return e._24(
        0,
        [
          (l()(),
          e._3(
            0,
            0,
            null,
            null,
            1,
            "span",
            [["class", "badge badge-secondary"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["Nieuw"]))
        ],
        null,
        null
      );
    }
    function el(l) {
      return e._24(
        0,
        [
          e._16(0, m.d, [e.s]),
          (l()(),
          e._3(
            1,
            0,
            null,
            null,
            10,
            "div",
            [["class", "container"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            3,
            0,
            null,
            null,
            7,
            "div",
            [["class", "row mb-4"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            5,
            0,
            null,
            null,
            1,
            "app-back-button",
            [],
            null,
            null,
            null,
            x,
            J
          )),
          e._2(6, 114688, null, 0, q, [m.g], null, null),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e.Y(16777216, null, null, 1, null, nl)),
          e._2(9, 16384, null, 0, m.k, [e.M, e.J], { ngIf: [0, "ngIf"] }, null),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(), e._22(-1, null, ["\n"])),
          (l()(),
          e._3(
            13,
            0,
            null,
            null,
            29,
            "div",
            [["class", "border rounded"]],
            null,
            null,
            null,
            null,
            null
          )),
          e._2(
            14,
            278528,
            null,
            0,
            m.i,
            [e.q, e.r, e.k, e.B],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          e._17(15, {
            "border-danger": 0,
            "border-warning": 1,
            "border-info": 2
          }),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(),
          e._3(
            17,
            0,
            null,
            null,
            24,
            "div",
            [["class", "container p-3"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(19, 0, null, null, 4, "h2", [], null, null, null, null, null)),
          (l()(), e._22(20, null, ["", "\n      "])),
          (l()(), e.Y(16777216, null, null, 1, null, ul)),
          e._2(
            22,
            16384,
            null,
            0,
            m.k,
            [e.M, e.J],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(25, 0, null, null, 1, "p", [], null, null, null, null, null)),
          (l()(), e._22(26, null, ["", ""])),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(28, 0, null, null, 0, "hr", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            30,
            0,
            null,
            null,
            5,
            "p",
            [["class", "text-muted"]],
            null,
            null,
            null,
            null,
            null
          )),
          (l()(), e._22(31, null, ["Categorie: ", "\n      "])),
          (l()(),
          e._3(32, 0, null, null, 0, "br", [], null, null, null, null, null)),
          (l()(),
          e._22(33, null, [
            "Geschreven door (( bericht.user.username )) op ",
            " om ",
            "."
          ])),
          e._18(34, 2),
          e._18(35, 2),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(37, 0, null, null, 0, "hr", [], null, null, null, null, null)),
          (l()(), e._22(-1, null, ["\n    "])),
          (l()(),
          e._3(
            39,
            0,
            null,
            null,
            1,
            "app-reactie-lijst",
            [],
            null,
            null,
            null,
            Q,
            X
          )),
          e._2(40, 114688, null, 0, W, [_, t.a], null, null),
          (l()(), e._22(-1, null, ["\n  "])),
          (l()(), e._22(-1, null, ["\n"]))
        ],
        function(l, n) {
          var u = n.component;
          l(n, 6, 0),
            l(n, 9, 0, !0),
            l(
              n,
              14,
              0,
              "border rounded",
              l(
                n,
                15,
                0,
                1 === u.bericht.categorie.graad,
                2 === u.bericht.categorie.graad,
                3 === u.bericht.categorie.graad
              )
            ),
            l(n, 22, 0, u.bericht.isNieuw()),
            l(n, 40, 0);
        },
        function(l, n) {
          var u = n.component;
          l(n, 20, 0, u.bericht.titel),
            l(n, 26, 0, u.bericht.boodschap),
            l(n, 31, 0, u.bericht.categorie.naam),
            l(
              n,
              33,
              0,
              e._23(
                n,
                33,
                0,
                l(
                  n,
                  34,
                  0,
                  e._14(n, 0),
                  u.bericht.dateAdded,
                  "EEEE d MMMM yyyy"
                )
              ),
              e._23(
                n,
                33,
                1,
                l(n, 35, 0, e._14(n, 0), u.bericht.dateAdded, "H:mm")
              )
            );
        }
      );
    }
    var tl = e.Z(
        "app-bericht-detail",
        r,
        function(l) {
          return e._24(
            0,
            [
              (l()(),
              e._3(
                0,
                0,
                null,
                null,
                1,
                "app-bericht-detail",
                [],
                null,
                null,
                null,
                el,
                ll
              )),
              e._2(1, 114688, null, 0, r, [t.a], null, null)
            ],
            function(l, n) {
              l(n, 1, 0);
            },
            null
          );
        },
        {},
        {},
        []
      ),
      rl = u("fAE3");
    u.d(n, "BerichtModuleNgFactory", function() {
      return il;
    });
    var il = e._0(f, [], function(l) {
      return e._11([
        e._12(512, e.j, e.W, [[8, [P, U, tl]], [3, e.j], e.v]),
        e._12(4608, s.h, s.n, [m.c, e.z, s.l]),
        e._12(4608, s.o, s.o, [s.h, s.m]),
        e._12(
          5120,
          s.a,
          function(l) {
            return [l];
          },
          [s.o]
        ),
        e._12(4608, s.k, s.k, []),
        e._12(6144, s.i, null, [s.k]),
        e._12(4608, s.g, s.g, [s.i]),
        e._12(6144, s.b, null, [s.g]),
        e._12(4608, s.f, s.j, [s.b, e.p]),
        e._12(4608, s.c, s.c, [s.f]),
        e._12(4608, m.m, m.l, [e.s, [2, m.s]]),
        e._12(4608, p.e, p.e, []),
        e._12(4608, p.w, p.w, []),
        e._12(4608, _, _, [s.c]),
        e._12(4608, g, g, [_]),
        e._12(512, s.e, s.e, []),
        e._12(512, s.d, s.d, []),
        e._12(512, m.b, m.b, []),
        e._12(512, p.u, p.u, []),
        e._12(512, p.q, p.q, []),
        e._12(512, rl.a, rl.a, []),
        e._12(512, t.n, t.n, [[2, t.s], [2, t.k]]),
        e._12(512, f, f, []),
        e._12(256, s.l, "XSRF-TOKEN", []),
        e._12(256, s.m, "X-XSRF-TOKEN", []),
        e._12(
          1024,
          t.i,
          function() {
            return [
              [
                { path: "lijst", component: h },
                { path: "nieuw", component: b },
                { path: ":id", component: r, resolve: { bericht: g } }
              ]
            ];
          },
          []
        )
      ]);
    });
  }
});
