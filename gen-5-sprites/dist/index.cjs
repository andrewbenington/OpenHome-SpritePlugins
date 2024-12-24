"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  plugin: () => plugin
});
module.exports = __toCommonJS(index_exports);
var import_pokemon_species_data = require("pokemon-species-data");
var plugin = {
  pluginName: "Gen 5 Animated Sprites",
  pluginID: "gen-5-sprites",
  getMonSpritePath: (params) => {
    const { dexNum, formeNum, format, isShiny } = params;
    if (format !== "PK5") return null;
    const speciesData = import_pokemon_species_data.PokemonData[dexNum];
    if (!speciesData) return null;
    const formeData = speciesData.formes[formeNum];
    if (!formeData) return null;
    if (formeData.gen > 5) return null;
    return `assets/${isShiny ? "shiny/" : ""}${formeData.formeName.toLowerCase()}.gif`;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugin
});
//# sourceMappingURL=index.cjs.map