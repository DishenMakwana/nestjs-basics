#### get grafana secret

```bash
kubectl get secret nestjs-metrics-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```
