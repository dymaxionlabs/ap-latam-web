# Deploy

* Copy `env.sample` into `.env` and set options accordingly.
  - Set `TOKEN` to the same key used on `ContactFormToken` env variable in
    `../.env.production`

* Run `sls deploy`

* Run the following lines for making the endpoint public (CORS):

```bash
gcloud functions add-iam-policy-binding $FUNCTION_NAME --member='allUsers' --role='roles/cloudfunctions.invoker'
```

where `$FUNCTION_NAME` is the full name of the deployed function.
