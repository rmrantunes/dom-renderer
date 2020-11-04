import CreateElement from "../CreateElement.js";

const tags =
  "a>,<abbr>,<acronym>,<abbr>,<address>,<applet>,<embed>,<object>,<area>,<article>,<aside>,<audio>,<b>,<base>,<basefont>,<bdi>,<bdo>,<big>,<blockquote>,<body>,<br>,<button>,<canvas>,<caption>,<center>,<cite>,<code>,<col>,<colgroup>,<data>,<datalist>,<dd>,<del>,<details>,<dfn>,<dialog>,<dir>,<ul>,<div>,<dl>,<dt>,<em>,<embed>,<fieldset>,<figcaption>,<figure>,<font>,<footer>,<form>,<frame>,<frameset>,<h1> to <h6>,<head>,<header>,<hr>,<html>,<i>,<iframe>,<img>,<input>,<ins>,<kbd>,<label>,<legend>,<li>,<link>,<main>,<map>,<mark>,<meta>,<meter>,<nav>,<noframes>,<noscript>,<object>,<ol>,<optgroup>,<option>,<output>,<p>,<param>,<picture>,<pre>,<progress>,<q>,<rp>,<rt>,<ruby>,<s>,<samp>,<script>,<section>,<select>,<small>,<source>,<span>,<strike>,<del>,<s>,<strong>,<style>,<sub>,<summary>,<sup>,<svg>,<table>,<tbody>,<td>,<template>,<textarea>,<tfoot>,<th>,<thead>,<time>,<title>,<tr>,<track>,<tt>,<u>,<ul>,<var>,<video>,<wbr";

const tagsArray = tags.split(">,<");

const Elements = {};

tagsArray.forEach((tag) => {
  Elements[tag] = new CreateElement(tag);
});

console.log(Elements);

export default Elements;
