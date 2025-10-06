 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 8199e55d5527daaad51f25a64de8b38a90583963..2e26accb70048da1fae4af5db5e1a2fbc19d0061 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,25 @@
-# scripts
+# scripts
+
+## Minimal Custom Context Menu
+
+Drop these files into any page to replace the default browser context menu with a custom one:
+
+- `context-menu.css`
+- `context-menu.js`
+- include the HTML structure shown below
+
+### Usage
+
+```html
+<link rel="stylesheet" href="context-menu.css">
+<ul class="context-menu" data-context-menu>
+  <li class="context-menu__item">Open</li>
+  <li class="context-menu__item">Duplicate</li>
+  <li class="context-menu__item">Share</li>
+  <li class="context-menu__separator" aria-hidden="true"></li>
+  <li class="context-menu__item">Delete</li>
+</ul>
+<script src="context-menu.js"></script>
+```
+
+Open `context-menu.html` in a browser to see the menu in action.
 
EOF
)
