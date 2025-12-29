---
layout: default
title: Redirect
permalink: /go/nordvpn
---

<script>
  (function() {
    var url = "{{ site.go_defaults.nordvpn }}";
    if (!url || url.trim() === "") {
      document.body.innerText = "推广链接尚未配置";
      return;
    }
    window.location.replace(url);
  })();
</script>
