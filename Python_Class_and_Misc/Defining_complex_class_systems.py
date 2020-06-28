class Invoice:

    def __init__(self, client, total):
        self._client = client
        self._total = total

    def formatter(self):
        return f'{self._client} owes: ${self._total}'

    @property
    def client(self):
        return self._client

    @client.setter
    def client(self, client):
        self._client = client

    @property
    def total(self):
        return self._total
    
google = Invoice('Google', 100)
print(google.formatter())
google.client = 'Gmail'
#google.total += 1000 does not work because it is protected
#google._total += 1000 still works becase I knew what the protected hidden self call was under the __init__ function
google._total += 1000
print(google.formatter())
