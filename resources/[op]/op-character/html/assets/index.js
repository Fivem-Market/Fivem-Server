import { j as f, r as i, c as w, R as v } from "./vendor.js";
const _ = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
    new MutationObserver((n) => {
        for (const a of n) if (a.type === "childList") for (const p of a.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && o(p);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(n) {
        const a = {};
        return (
            n.integrity && (a.integrity = n.integrity),
            n.referrerpolicy && (a.referrerPolicy = n.referrerpolicy),
            n.crossorigin === "use-credentials" ? (a.credentials = "include") : n.crossorigin === "anonymous" ? (a.credentials = "omit") : (a.credentials = "same-origin"),
            a
        );
    }
    function o(n) {
        if (n.ep) return;
        n.ep = !0;
        const a = s(n);
        fetch(n.href, a);
    }
};
_();
const g = "_app_1lw53_1",
    y = "_header_1lw53_5",
    x = "_corner_top_right_1lw53_27",
    S = "_corner_bottom_left_1lw53_47";
var c = { app: g, header: y, corner_top_right: x, corner_bottom_left: S },
    C = "/html/assets/default.png",
    b = "/html/assets/lossantos.png",
    P = "/html/assets/paletobay.png";
const m = [
        { identifier: "default", name: "Bienvenue \xE0 San Andreas", description: "Choisis ton d\xE9part en cliquant sur l'un des deux points !", image: C },
        { identifier: "spawn1", name: "Los Santos", description: "La ville avec le plus gros r\xE9seau de livreur Zuber de tout San Andreas !", image: b, waypoint: { left: "85vw", top: "50vh" } },
        { identifier: "spawn2", name: "Paleto Bay", description: "La ville o\xF9 vous avez le plus de chance de vous faire d\xE9vorer par un animal sauvage de tout San Andreas !", image: P, waypoint: { left: "14vw", top: "60vh" } },
    ],
    t = f.exports.jsx,
    d = f.exports.jsxs,
    u = i.exports.createContext({ spawn: {}, updateSpawn: (r) => {} }),
    L = ({ children: r }) => {
        const [e, s] = i.exports.useState(m[0]),
            o = i.exports.useCallback((a) => s(a), [s]),
            n = i.exports.useMemo(
                function () {
                    return { spawn: e, updateSpawn: o };
                },
                [e, o]
            );
        return t(u.Provider, { value: n, children: r });
    },
    N = "_container_1w5c9_1",
    E = "_preview_1w5c9_6",
    k = "_title_1w5c9_14",
    A = "_description_1w5c9_22",
    j = "_icon_1w5c9_32",
    B = "_button_1w5c9_38";
var l = { container: N, preview: E, title: k, description: A, icon: j, button: B };
const H = "https://op-character";
function h(r, e = {}, s = () => {}) {
    r.charAt(0) !== "/" && (r = `/${r}`),
        fetch(`${H}${r}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) })
            .then((o) => {
                o.ok &&
                    o.json().then((n) => {
                        n === "ok" && s();
                    });
            })
            .catch((o) => console.error(o));
}
const M = () => {
        const { updateSpawn: r } = i.exports.useContext(u);
        return t("div", {
            children: m
                .filter((e) => e.identifier !== "default")
                .map((e) =>
                    t("div", {
                        className: l.icon,
                        style: e.waypoint && { top: e.waypoint.top, left: e.waypoint.left },
                        onClick: () => r(e),
                        children: t("svg", {
                            height: "2rem",
                            width: "2rem",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 384 512",
                            children: t("path", {
                                d:
                                    "M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z",
                            }),
                        }),
                    })
                ),
        });
    },
    O = (r) => {
        const { spawn: e } = i.exports.useContext(u),
            s = i.exports.useCallback(() => {
                h("/SpawnPlayer", { SpawnId: e.identifier });
            }, [e, h]);
        return d("section", {
            className: l.container,
            style: r.style,
            children: [
                t("div", { className: l.preview, style: { backgroundImage: `url(${e.image})` } }),
                t("h3", { className: l.title, children: e.name }),
                t("h4", { className: l.description, children: e.description }),
                t("div", {
                    className: l.button,
                    style: { transition: "all .5s", opacity: e.identifier !== "default" ? "1" : "0", top: e.identifier !== "default" ? "0vh" : "-10vh" },
                    children: t("div", { onClick: s, children: "Choisir ce point de d\xE9marrage" }),
                }),
            ],
        });
    },
    I = () => {
        const [r, e] = i.exports.useState(!1),
            s = i.exports.useCallback((o) => {
                o.data.action === "open" && e(!0), o.data.action === "close" && e(!1);
            }, []);
        return (
            i.exports.useEffect(() => (window.addEventListener("message", s), () => window.removeEventListener("message", s)), []),
            t(L, {
                children: d("main", {
                    className: c.app,
                    style: { transition: "opacity .5s", opacity: r ? 1 : 0 },
                    children: [
                        d("header", {
                            className: c.header,
                            style: { transition: "transform .5s", transform: r ? "translateY(0)" : "translateY(1vh)" },
                            children: [t("h1", { children: "D\xE9marrage" }), t("h2", { children: "Los Santos" })],
                        }),
                        t(O, { style: { position: "relative", transition: "transform .5s", transform: r ? "translateY(0)" : "translateY(-1vh)" } }),
                        t(M, {}),
                        d("footer", {
                            className: c.footer,
                            children: [
                                t("div", {
                                    className: c.corner_top_right,
                                    children: t("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "71.927",
                                        height: "71.126",
                                        viewBox: "0 0 71.927 71.126",
                                        children: t("path", {
                                            id: "Path_7",
                                            "data-name": "Path 7",
                                            d: "M61.5,959.681l-2.171,3.894v9.506l-1.374,5.612v24.51l-2.291,4.925v22.678H83.037l3.894-1.947H120.6l6.987-2.291H61.5Z",
                                            transform: "translate(127.591 1030.807) rotate(180)",
                                            fill: "#46ea18",
                                        }),
                                    }),
                                }),
                                t("div", {
                                    className: c.corner_bottom_left,
                                    children: t("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "71.927",
                                        height: "71.126",
                                        viewBox: "0 0 71.927 71.126",
                                        children: t("path", {
                                            id: "Path_4",
                                            "data-name": "Path 4",
                                            d: "M61.5,959.681l-2.171,3.894v9.506l-1.374,5.612v24.51l-2.291,4.925v22.678H83.037l3.894-1.947H120.6l6.987-2.291H61.5Z",
                                            transform: "translate(-55.664 -959.681)",
                                            fill: "#46ea18",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    };
w.createRoot(document.getElementById("app")).render(t(v.StrictMode, { children: t(I, {}) }));
