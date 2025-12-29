---
layout: default
title: Redirect
permalink: /go/vyprvpn
---

<script>
  (function() {
    var url = "{{ site.go_defaults.vyprvpn }}";
    if (!url || url.trim() === "") {
      document.body.innerText = "推广链接尚未配置";
      return;
    }
    window.location.replace(url);
  })();
</script>
