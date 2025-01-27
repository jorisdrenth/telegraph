---
title: 'Retrieve Callback Data'
menuTitle: 'Callback Data'
description: ''
category: 'Webhooks'
fullscreen: false
position: 64
---

Callback query data must be defined with the following structure:

```
action:action_name;key1:foo;key2:bar
```

and will be handled by a public `action_name` method inside a custom [webhook handler](webhooks/overview).

*Telegraph* implements some useful methods to interact with the received callback query:


Data can be retrieved from the payload using `->get()` method:

```php
class CustomWebhookHandler extends WebhookHandler
{
    public function dismiss(){
        //...

        $key1 = $this->data->get('key1'); //foo

        $key3 = $this->data->get('key1', 'default value'); //default value
    }
}
```


